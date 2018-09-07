window.addEventListener('DOMContentLoaded', () => {

//slider
function mainSlider() {
	let slideIndex = 1,
		slides = document.getElementsByClassName('main-slider-item'),
		slideInterval = setInterval(function() {
			showSlides(slideIndex += 1)
		}, 5000);	
	
	showSlides(slideIndex);

	function showSlides(n) {
		if (n > slides.length) {
			slideIndex = 1;
		}

		if (n < 1) {
			slideIndex = slides.length;
		}

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}

		slides[slideIndex - 1].style.display = 'block';
	};
}

mainSlider();

//Modal
function modal() {
let popupDesign = document.querySelector('.popup-design'),
	popupConsultation = document.querySelector('.popup-consultation'),
	popupGift = document.querySelector('.popup-gift'),
	giftImg = document.querySelector('.fixed-gift');

document.body.addEventListener('click', function (event) {
	if (event.target && event.target.classList.contains('button-design')) {
		popupDesign.style.display = 'block';
	}

	if (event.target && event.target.classList.contains('button-consultation')) {
		popupConsultation.style.display = 'block';
	}

	if (event.target && event.target.classList.contains('fixed-gift')) {
		popupGift.style.display = 'block';
		giftImg.style.display = 'none';
	}

	if (event.target && (event.target.className == 'popup-close' || event.target.className == 'popup-design' || event.target.className == 'popup-consultation' || event.target.className == 'popup-gift')) {
		popupDesign.style.display = 'none';
		popupConsultation.style.display = 'none';
		popupGift.style.display = 'none';
	}
});
}

modal();


//More styles
function styles() {
let moreBtn = document.querySelector('.button-transparent'),
	styleClass = document.getElementsByClassName('styles-2');

moreBtn.addEventListener('click', function() {
	for (let i = 0; i < styleClass.length; i++) {
		styleClass[i].classList = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 styles-2';
	}

	this.style.display = "none";
});
}

styles();


//Tabs
function filter() {
let portfolioMenu = document.querySelector('.portfolio-menu'),
	portfolioWrapper = document.querySelector('.portfolio-wrapper'),
	noPortfolio = document.querySelector('.first');

	portfolioMenu.addEventListener('click', function(event){
		if (event.target && event.target.classList.contains('tab')) {
			for (let i = 0; i < this.childNodes.length; i++) {
        		let childMenu = this.childNodes[i];

        		if(childMenu.className) {
            		childMenu.className = childMenu.className.replace( /(?:^|\s)active(?!\S)/, '' );
        		}
    		}

			event.target.classList.toggle('active');
		}

		if (!event.target.classList.contains('all')) {
			for (let i = 0; i < portfolioWrapper.childNodes.length; i++) {
				let childWrapper = portfolioWrapper.childNodes[i];

				if (childWrapper.className == undefined) continue;

		        if (`${childWrapper.className.match(/^\S+\s/)}` == `${event.target.className.match(/^\S+\s/)}`) {
		        	childWrapper.className = childWrapper.className.replace( /(?:^|\s)portfolio-no(?!\S)/, ' portfolio-block' );
		        } else {
		           childWrapper.className = childWrapper.className.replace( /(?:^|\s)portfolio-block(?!\S)/, ' portfolio-no' );
		        }	    	
			}

	        if (document.querySelectorAll('.portfolio-block').length == 0) {
	        	noPortfolio.style.display = 'block';
	        } else {
	        	noPortfolio.style.display = 'none';
	        }	
		} else {
			for (let i = 0; i < portfolioWrapper.childNodes.length; i++) {
        		let childWrapper = portfolioWrapper.childNodes[i];

        		if (childWrapper.className == undefined) continue;
				childWrapper.className = childWrapper.className.replace( /(?:^|\s)portfolio-no(?!\S)/, ' portfolio-block' );
			}
		}


	});
}

filter();


//gift timeout
function giftTimeout() {
	let popupDesign = document.querySelector('.popup-design'),
		popupConsultation = document.querySelector('.popup-consultation'),
		popupGift = document.querySelector('.popup-gift');

	let	consultationTimeout = setTimeout(function() {
		if (popupDesign.style.display !== 'block' && popupGift.style.display !== 'block') {
			popupConsultation.style.display = 'block';
		}
	},60000)
};

giftTimeout();

})