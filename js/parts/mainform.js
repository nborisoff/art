"use strict";

require("core-js/modules/es6.regexp.replace");

function mainForm() {
  var mobileInput = document.querySelector('.main-mobile'),
      nameInput = document.querySelector('.main-name'),
      messageInput = document.querySelector('.main-message');
  mobileInput.addEventListener("input", function () {
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
  });
  nameInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^а-яё ]/i, '');
  });
  messageInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^а-яё0-9 ,.!?()]/i, '');
  });
  var mainForm = document.querySelector('.main-form'),
      input = mainForm.getElementsByTagName('input'),
      img = document.createElement('img'),
      inputWrapper = document.querySelector('.input-wrapper');
  img.classList.add('img-status');
  mainForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var formData = new FormData(mainForm);
    request.send(formData);

    request.onreadystatechange = function () {
      if (request.readyState < 4) {
        img.src = 'img/ajax-loader.gif';
        inputWrapper.appendChild(img);
      } else if (request.readyState === 4) {
        if (request.status == 200 && request.status < 300) {
          img.src = 'img/approval.png';
          inputWrapper.appendChild(img);
        } else {
          img.src = 'img/failure.png';
          inputWrapper.appendChild(img);
        }
      }
    };

    for (var i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  });
}

module.exports = mainForm;