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