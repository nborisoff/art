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
	let mainSLider = __webpack_require__(2),
		modal = __webpack_require__(3),
		styles = __webpack_require__(4),
		feedbackSlider = __webpack_require__(5),
		filter = __webpack_require__(6),
		giftTimeout = __webpack_require__(7),
		showImg = __webpack_require__(8),
		burger = __webpack_require__(9),
		mainForm = __webpack_require__(10),
		calculator = __webpack_require__(11),
		accordion = __webpack_require__(12);

	mainSLider();
	modal();
	styles();
	feedbackSlider();
	filter();
	giftTimeout();
	showImg();
	burger();
	mainForm();
	calculator();
	accordion();
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
	let message = new Object();
		message.loading = 'Загрузка...';
		message.success = 'Спасибо! Скоро мы с вами свяжемся!';
		message.failure = 'Что-то пошло не так...';

	let popupDesign = document.querySelector('.popup-design'),
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
	});

//validation

	let orderMobile = document.querySelector('.order-mobile'),
		orderName = document.querySelector('.order-name'),
		orderMessage = document.querySelector('.order-message'),
		consultationMobile = document.querySelector('.consultation-mobile'),
		consultationName = document.querySelector('.consultation-name');
	
	function checkMobile() {
	    let mask = '+_ (___) ___ ____',
	        str = this.value.replace(/\D/g, ''),
	        i = 0;

	    this.value = mask.replace(/./g, function(input) {
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

	orderName.addEventListener("input", function() {
		this.value = this.value.replace(/[^а-яё ]/i, '');
	});

	orderMessage.addEventListener("input", function() {
		this.value = this.value.replace(/[^а-яё0-9 ,.!?()]/i, '');
	});
	
	consultationMobile.addEventListener("input", checkMobile);

	consultationName.addEventListener("input", function() {
		this.value = this.value.replace(/[^а-яё ]/i, '');
	});

//ajax

	function clear(input) {
		for (let i = 0; i < input.length; i++) {
			input[i].value = ''; 
		}
	}

	orderForm.addEventListener('submit', function(event) {
		event.preventDefault();
		popupContentOrder.appendChild(statusMessage);

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		let formData = new FormData(orderForm);
		request.send(formData);

		request.onreadystatechange = function() {
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
		}

		clear(inputOrder);
	});

	consultationForm.addEventListener('submit', function(event) {
		event.preventDefault();
		popupContentConsultation.appendChild(statusMessage);

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		let formData = new FormData(consultationForm);
		request.send(formData);

		request.onreadystatechange = function() {
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
		}

		clear(inputConsultation);
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
			for (let i = 0; i < slides.length; i++) {
				slides[i].classList.remove('slideInLeft');
				slides[i].classList.add('slideInRight');
			}
			
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
		for (let i = 0; i < slides.length; i++) {
			slides[i].classList.remove('slideInRight');
			slides[i].classList.add('slideInLeft');
		}

		plusSlides(-1);
	});

	next.addEventListener('click', function() {
		for (let i = 0; i < slides.length; i++) {
			slides[i].classList.remove('slideInLeft');
			slides[i].classList.add('slideInRight');
		}

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

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function burger() {
	let burger = document.querySelector('.burger'),
		burgerMenu = document.querySelector('.burger-menu');


	burger.addEventListener('touchstart', function (event) {
		if(window.innerWidth <= 768){
			if (event.target.className == 'burger' && burgerMenu.style.display == 'block') {
				burgerMenu.style.display = 'none';
			} else {
				burgerMenu.style.display = 'block';
			}
		}
	})

	window.addEventListener('resize', function (event) {
		if(window.innerWidth > 768){
			burgerMenu.style.display = 'none';
		}
	})
}

module.exports = burger;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function mainForm() {
	let mobileInput = document.querySelector('.main-mobile'),
		nameInput = document.querySelector('.main-name'),
		messageInput = document.querySelector('.main-message');
	
	mobileInput.addEventListener("input", function() {
	    let mask = '+_ (___) ___ ____',
	        str = this.value.replace(/\D/g, ''),
	        i = 0;

	    this.value = mask.replace(/./g, function(input) {
	        if (/[_\d]/.test(input) && i < str.length) {
	        	return str.charAt(i++);
	        } else if (i >= str.length) {
	        	return '';
	        } else {
	        	return input;
	        }	
	    });
	});

	nameInput.addEventListener("input", function() {
		this.value = this.value.replace(/[^а-яё ]/i, '');
	});

	messageInput.addEventListener("input", function() {
		this.value = this.value.replace(/[^а-яё0-9 ,.!?()]/i, '');
	});

	
	let mainForm = document.querySelector('.main-form'),
		input = mainForm.getElementsByTagName('input'),
		img = document.createElement('img'),
		inputWrapper = document.querySelector('.input-wrapper');

		img.classList.add('img-status');

		mainForm.addEventListener('submit', function(event) {
			event.preventDefault();

			let request = new XMLHttpRequest();
			request.open('POST', 'server.php');
			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

			let formData = new FormData(mainForm);
			request.send(formData);

			request.onreadystatechange = function() {
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
			}

			for (let i = 0; i < input.length; i++) {
				input[i].value = ''; 
			}
	});
}

module.exports = mainForm;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function calculator() {
	let size = document.getElementById('size'),
		material = document.getElementById('material'),
		option = document.getElementById('options'),
		promocode = document.querySelector('.promocode'),
		totalValue = document.querySelector('.calc-price'),
		sizeType = 0,
		materialType = 0,
		options = 1,
		total = 0;

	size.addEventListener('change', function () {
		totalValue.innerHTML = 0;
	    sizeType = this.value;
	    total = (sizeType * materialType + 3000) * options;

	    if (material.value == 0 || size.value == 0) {
	      totalValue.innerHTML = 0;
	    } else {
	      totalValue.innerHTML = total;
	    }
	    promo();
  	});	

  	material.addEventListener('change', function () {
		totalValue.innerHTML = 0;
	    materialType = this.value;
	    total = (sizeType * materialType + 3000) * options;

	    if (size.value == 0 || material.value == 0) {
	      totalValue.innerHTML = 0;
	    } else {
	      totalValue.innerHTML = total;
	    }

	   	promo();
  	});

  	option.addEventListener('change', function () {
  		totalValue.innerHTML = 0;
  		options = this.value;
  		total = (sizeType * materialType + 3000) * options;

	    if (size.value == 0 || material.value == 0) {
	      totalValue.innerHTML = 0;
	    } else {
	      totalValue.innerHTML = total;
	    }

	    promo();
  	}); 

  	function promo() {
		if(promocode.value == 'IWANTPOPART'){
			totalValue.innerHTML = totalValue.innerHTML * 0.7;
		} else {
			totalValue.innerHTML = total;
		}
	} 

	promocode.addEventListener('change', function() {
		promo();
	});
}

module.exports = calculator;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

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

/***/ })
/******/ ]);