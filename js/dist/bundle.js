/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function() {
	let mainSLider = __webpack_require__(2);
	let modal = __webpack_require__(3);
	let styles = __webpack_require__(4);
	let feedbackSlider = __webpack_require__(5);
	let filter = __webpack_require__(6);
	let giftTimeout = __webpack_require__(7);
	let showImg = __webpack_require__(8);

	mainSLider();
	modal();
	styles();
	feedbackSlider();
	filter();
	giftTimeout();
	showImg();
})

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function mainSlider() {
	let slideIndex = 1,
		slides = document.getElementsByClassName('main-slider-item'),

		slideInterval = setInterval(function() {
			showSlides(slideIndex += 1)
		}, 5000);	
	
	showSlides(slideIndex);

	function showSlides(n) {
		if (n > slides.length) {
			slideIndex = 1;
		}

		if (n < 1) {
			slideIndex = slides.length;
		}

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}

		slides[slideIndex - 1].style.display = 'block';
	};
}

module.exports = mainSlider;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function modal() {
	let popupDesign = document.querySelector('.popup-design'),
		popupConsultation = document.querySelector('.popup-consultation'),
		popupGift = document.querySelector('.popup-gift'),
		giftImg = document.querySelector('.fixed-gift');

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
		}
	});
}

module.exports = modal;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function styles() {
	let moreBtn = document.querySelector('.button-transparent'),
		styleClass = document.getElementsByClassName('styles-2');

	moreBtn.addEventListener('click', function() {
		for (let i = 0; i < styleClass.length; i++) {
			styleClass[i].classList = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 styles-2';
		}

		this.style.display = "none";
	});
}

module.exports = styles;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function feedbackSlider() {
	let slideIndex = 1,
		slides = document.getElementsByClassName('feedback-slider-item'),
		prev = document.querySelector('.main-prev-btn'),
		next = document.querySelector('.main-next-btn'),

		slideInterval = setInterval(function() {
			showSlides(slideIndex += 1)
		}, 15000);	
	
	showSlides(slideIndex);

	function showSlides(n) {
		if (n > slides.length) {
			slideIndex = 1;
		}

		if (n < 1) {
			slideIndex = slides.length;
		}

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}

		slides[slideIndex - 1].style.display = 'block';
	};

	function plusSlides(n) {
		showSlides(slideIndex += n);
	};

	prev.addEventListener('click', function() {
		plusSlides(-1);
	});

	next.addEventListener('click', function() {
		plusSlides(1);
	});
}

module.exports = feedbackSlider;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

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

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function giftTimeout() {
	let popupDesign = document.querySelector('.popup-design'),
		popupConsultation = document.querySelector('.popup-consultation'),
		popupGift = document.querySelector('.popup-gift');

	let	consultationTimeout = setTimeout(function() {
		if (popupDesign.style.display !== 'block' && popupGift.style.display !== 'block') {
			popupConsultation.style.display = 'block';
		}
	},60000)
};

module.exports = giftTimeout;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function showImg() {
	let imgInfo = document.getElementsByClassName('img-info'),
		wrapperBlock = document.querySelector('.sizes-wrapper'),
		img = document.getElementsByClassName('image');
		
	wrapperBlock.addEventListener('mouseover', function(event){
		if (event.target && event.target.classList.contains('image')) {
			let index = event.target.className.substring(5,6);

			event.target.setAttribute('src', `img/sizes-${index}-1.png`);
			imgInfo[index-1].style.display = 'none';
		}	
	});

	wrapperBlock.addEventListener('mouseout', function(event){
		if (event.target && event.target.classList.contains('image')) {
			let index = event.target.className.substring(5,6);

			event.target.setAttribute('src', `img/sizes-${index}.png`);
			imgInfo[index-1].style.display = 'block';
		}
	});

	wrapperBlock.addEventListener('touchstart', function(event){
		if (event.target && (event.target.classList.contains('image'))) {
			let index = event.target.className.substring(5,6);

			event.target.setAttribute('src', `img/sizes-${index}-1.png`);
			imgInfo[index-1].style.display = 'none';
		}

		if (event.target && event.target.classList.contains('sizes-wrapper')) {
			for (let i = 0; i < img.length; i++) {
				img[i].setAttribute('src', `img/sizes-${i+1}.png`)
				img[i].style.display = 'block';
				imgInfo[i].style.display = 'block';
			}
		}
	});
}

module.exports = showImg;

/***/ })
/******/ ]);