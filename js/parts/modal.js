"use strict";

require("core-js/modules/es6.regexp.replace");

function modal() {
  var message = new Object();
  message.loading = 'Загрузка...';
  message.success = 'Спасибо! Скоро мы с вами свяжемся!';
  message.failure = 'Что-то пошло не так...';
  var popupDesign = document.querySelector('.popup-design'),
      popupConsultation = document.querySelector('.popup-consultation'),
      popupGift = document.querySelector('.popup-gift'),
      giftImg = document.querySelector('.fixed-gift'),
      orderForm = document.querySelector('.order-form'),
      inputOrder = orderForm.getElementsByTagName('input'),
      consultationForm = document.querySelector('.consultation-form'),
      inputConsultation = consultationForm.getElementsByTagName('input'),
      statusMessage = document.createElement('div'),
      popupContentOrder = document.getElementsByClassName('popup-content')[2],
      popupContentConsultation = document.querySelector('.popup-content');
  statusMessage.classList.add('p-heading');
  statusMessage.classList.add('visible');
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
      orderForm.style.display = 'block';
      consultationForm.style.display = 'block';

      if (!!document.querySelector('.visible') && !!document.querySelector('.visible').closest('.popup-design')) {
        popupContentOrder.removeChild(document.querySelector('.visible'));
      } else if (!!document.querySelector('.visible') && !!document.querySelector('.visible').closest('.popup-consultation')) {
        popupContentConsultation.removeChild(document.querySelector('.visible'));
      }
    }
  }); //validation

  var orderMobile = document.querySelector('.order-mobile'),
      orderName = document.querySelector('.order-name'),
      orderMessage = document.querySelector('.order-message'),
      consultationMobile = document.querySelector('.consultation-mobile'),
      consultationName = document.querySelector('.consultation-name');

  function checkMobile() {
    var mask = '+_ (___) ___ ____',
        str = this.value.replace(/\D/g, ''),
        i = 0;
    this.value = mask.replace(/./g, function (input) {
      if (/[_\d]/.test(input) && i < str.length) {
        return str.charAt(i++);
      } else if (i >= str.length) {
        return '';
      } else {
        return input;
      }
    });
  }

  orderMobile.addEventListener("input", checkMobile);
  orderName.addEventListener("input", function () {
    this.value = this.value.replace(/[^а-яё ]/i, '');
  });
  orderMessage.addEventListener("input", function () {
    this.value = this.value.replace(/[^а-яё0-9 ,.!?()]/i, '');
  });
  consultationMobile.addEventListener("input", checkMobile);
  consultationName.addEventListener("input", function () {
    this.value = this.value.replace(/[^а-яё ]/i, '');
  }); //ajax

  function clear(input) {
    for (var i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  }

  orderForm.addEventListener('submit', function (event) {
    event.preventDefault();
    popupContentOrder.appendChild(statusMessage);
    var request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var formData = new FormData(orderForm);
    request.send(formData);

    request.onreadystatechange = function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4) {
        if (request.status == 200 && request.status < 300) {
          orderForm.style.display = 'none';
          statusMessage.innerHTML = message.success;
        } else {
          orderForm.style.display = 'none';
          statusMessage.innerHTML = message.failure;
        }
      }
    };

    clear(inputOrder);
    orderMessage.value = '';
  });
  consultationForm.addEventListener('submit', function (event) {
    event.preventDefault();
    popupContentConsultation.appendChild(statusMessage);
    var request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var formData = new FormData(consultationForm);
    request.send(formData);

    request.onreadystatechange = function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4) {
        if (request.status == 200 && request.status < 300) {
          consultationForm.style.display = 'none';
          statusMessage.innerHTML = message.success;
        } else {
          consultationForm.style.display = 'none';
          statusMessage.innerHTML = message.failure;
        }
      }
    };

    clear(inputConsultation);
  });
}

module.exports = modal;