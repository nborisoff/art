"use strict";

require("core-js/modules/es6.regexp.match");

require("core-js/modules/es6.regexp.replace");

function filter() {
  var portfolioMenu = document.querySelector('.portfolio-menu'),
      portfolioWrapper = document.querySelector('.portfolio-wrapper'),
      noPortfolio = document.querySelector('.first');
  portfolioMenu.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('tab')) {
      for (var i = 0; i < this.childNodes.length; i++) {
        var childMenu = this.childNodes[i];

        if (childMenu.className) {
          childMenu.className = childMenu.className.replace(/(?:^|\s)active(?!\S)/, '');
        }
      }

      event.target.classList.toggle('active');
    }

    if (!event.target.classList.contains('all')) {
      for (var _i = 0; _i < portfolioWrapper.childNodes.length; _i++) {
        var childWrapper = portfolioWrapper.childNodes[_i];
        if (childWrapper.className == undefined) continue;

        if ("".concat(childWrapper.className.match(/^\S+\s/)) == "".concat(event.target.className.match(/^\S+\s/))) {
          childWrapper.className = childWrapper.className.replace(/(?:^|\s)portfolio-no(?!\S)/, ' portfolio-block');
        } else {
          childWrapper.className = childWrapper.className.replace(/(?:^|\s)portfolio-block(?!\S)/, ' portfolio-no');
        }
      }

      if (document.querySelectorAll('.portfolio-block').length == 0) {
        noPortfolio.style.display = 'block';
      } else {
        noPortfolio.style.display = 'none';
      }
    } else {
      for (var _i2 = 0; _i2 < portfolioWrapper.childNodes.length; _i2++) {
        var _childWrapper = portfolioWrapper.childNodes[_i2];
        if (_childWrapper.className == undefined) continue;
        _childWrapper.className = _childWrapper.className.replace(/(?:^|\s)portfolio-no(?!\S)/, ' portfolio-block');
        noPortfolio.style.display = 'none';
      }
    }
  });
}

module.exports = filter;