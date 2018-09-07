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