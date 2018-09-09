"use strict";

function giftTimeout() {
  var popupDesign = document.querySelector('.popup-design'),
      popupConsultation = document.querySelector('.popup-consultation'),
      popupGift = document.querySelector('.popup-gift');
  var consultationTimeout = setTimeout(function () {
    if (popupDesign.style.display !== 'block' && popupGift.style.display !== 'block') {
      popupConsultation.style.display = 'block';
    }
  }, 60000);
}

;
module.exports = giftTimeout;