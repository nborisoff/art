function accordion() {
	let accordion = document.getElementById('accordion'),
		accordionHeading = document.querySelectorAll('.accordion-heading'),
		accordionBlock = document.querySelectorAll('.accordion-block');


	for (let i = 0; i < accordionBlock.length; i++) {
		accordionBlock[i].style.display = 'none';
	}

	accordion.addEventListener('click', function (event) {		
		for (let i = 0; i < accordionHeading.length; i++) {
			if (event.target == accordionHeading[i].firstChild) {

				if(accordionHeading[i].classList.contains('ui-accordion-header-active')) {
					accordionBlock[i].style.display = 'none';
					accordionHeading[i].classList.remove('ui-accordion-header-active');
				} else {	
					accordionHeading[i].classList.add('ui-accordion-header-active');
			
					for (let j = 0; j < accordionBlock.length; j++) {
						accordionBlock[j].style.display = 'none';
						accordionHeading[j].classList.remove('ui-accordion-header-active');
					}

					accordionBlock[i].style.display = '';
					accordionHeading[i].classList.add('ui-accordion-header-active');	
				} 
	
			}
		}
	});	
}

module.exports = accordion;