"use strict";

function styles() {
  var moreBtn = document.querySelector('.button-transparent'),
      styleClass = document.getElementsByClassName('styles-2');
  moreBtn.addEventListener('click', function () {
    for (var i = 0; i < styleClass.length; i++) {
      styleClass[i].classList = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 styles-2';
    }

    this.style.display = "none";
  });
}

module.exports = styles;