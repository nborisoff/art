"use strict";

function mainSlider() {
  var slideIndex = 1,
      slides = document.getElementsByClassName('main-slider-item'),
      slideInterval = setInterval(function () {
    showSlides(slideIndex += 1);
  }, 5000);
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
  }

  ;
}

module.exports = mainSlider;