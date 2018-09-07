window.addEventListener('DOMContentLoaded', function() {
	let mainSLider = require('./parts/mainslider.js');
	let modal = require('./parts/modal.js');
	let styles = require('./parts/styles.js');
	let feedbackSlider = require('./parts/feedbackslider.js');
	let filter = require('./parts/tabs.js');
	let giftTimeout = require('./parts/gift.js');
	let showImg = require('./parts/images.js');

	mainSLider();
	modal();
	styles();
	feedbackSlider();
	filter();
	giftTimeout();
	showImg();
})