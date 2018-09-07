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
				noPortfolio.style.display = 'none';
			}
		}


	});
}

module.exports = filter;