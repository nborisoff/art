"use strict";

function accordion() {
  var accordion = document.getElementById('accordion'),
      accordionHeading = document.querySelectorAll('.accordion-heading'),
      accordionBlock = document.querySelectorAll('.accordion-block');

  for (var i = 0; i < accordionBlock.length; i++) {
    accordionBlock[i].style.display = 'none';
  }

  accordion.addEventListener('click', function (event) {
    for (var _i = 0; _i < accordionHeading.length; _i++) {
      if (event.target == accordionHeading[_i].firstChild) {
        if (accordionHeading[_i].classList.contains('ui-accordion-header-active')) {
          accordionBlock[_i].style.display = 'none';

          accordionHeading[_i].classList.remove('ui-accordion-header-active');
        } else {
          accordionHeading[_i].classList.add('ui-accordion-header-active');

          for (var j = 0; j < accordionBlock.length; j++) {
            accordionBlock[j].style.display = 'none';
            accordionHeading[j].classList.remove('ui-accordion-header-active');
          }

          accordionBlock[_i].style.display = '';

          accordionHeading[_i].classList.add('ui-accordion-header-active');
        }
      }
    }
  });
}

module.exports = accordion;