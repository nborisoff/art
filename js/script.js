window.addEventListener('DOMContentLoaded', function() {
	let mainSLider = require('./parts/mainslider.js'),
		modal = require('./parts/modal.js'),
		styles = require('./parts/styles.js'),
		feedbackSlider = require('./parts/feedbackslider.js'),
		filter = require('./parts/tabs.js'),
		giftTimeout = require('./parts/gift.js'),
		showImg = require('./parts/images.js'),
		burger = require('./parts/burger.js');

	mainSLider();
	modal();
	styles();
	feedbackSlider();
	filter();
	giftTimeout();
	showImg();
	burger();
})