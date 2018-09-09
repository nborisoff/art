"use strict";

function showImg() {
  var imgInfo = document.getElementsByClassName('img-info'),
      wrapperBlock = document.querySelector('.sizes-wrapper'),
      img = document.getElementsByClassName('image');
  wrapperBlock.addEventListener('mouseover', function (event) {
    if (event.target && event.target.classList.contains('image')) {
      var index = event.target.className.substring(5, 6);
      event.target.setAttribute('src', "img/sizes-".concat(index, "-1.png"));
      imgInfo[index - 1].style.display = 'none';
    }
  });
  wrapperBlock.addEventListener('mouseout', function (event) {
    if (event.target && event.target.classList.contains('image')) {
      var index = event.target.className.substring(5, 6);
      event.target.setAttribute('src', "img/sizes-".concat(index, ".png"));
      imgInfo[index - 1].style.display = 'block';
    }
  });
  wrapperBlock.addEventListener('touchstart', function (event) {
    if (event.target && event.target.classList.contains('image')) {
      var index = event.target.className.substring(5, 6);
      event.target.setAttribute('src', "img/sizes-".concat(index, "-1.png"));
      imgInfo[index - 1].style.display = 'none';
    }

    if (event.target && event.target.classList.contains('sizes-wrapper')) {
      for (var i = 0; i < img.length; i++) {
        img[i].setAttribute('src', "img/sizes-".concat(i + 1, ".png"));
        img[i].style.display = 'block';
        imgInfo[i].style.display = 'block';
      }
    }
  });
}

module.exports = showImg;