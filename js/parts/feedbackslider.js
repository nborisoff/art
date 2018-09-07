function feedbackSlider() {
	let slideIndex = 1,
		slides = document.getElementsByClassName('feedback-slider-item'),
		prev = document.querySelector('.main-prev-btn'),
		next = document.querySelector('.main-next-btn'),

		slideInterval = setInterval(function() {
			for (let i = 0; i < slides.length; i++) {
				slides[i].classList.remove('slideInLeft');
				slides[i].classList.add('slideInRight');
			}
			
			showSlides(slideIndex += 1)
		}, 15000);	
	console.log(slides[0]);
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

	function plusSlides(n) {
		showSlides(slideIndex += n);
	};

	prev.addEventListener('click', function() {
		for (let i = 0; i < slides.length; i++) {
			slides[i].classList.remove('slideInRight');
			slides[i].classList.add('slideInLeft');
		}

		plusSlides(-1);
	});

	next.addEventListener('click', function() {
		for (let i = 0; i < slides.length; i++) {
			slides[i].classList.remove('slideInLeft');
			slides[i].classList.add('slideInRight');
		}

		plusSlides(1);
	});
}

module.exports = feedbackSlider;