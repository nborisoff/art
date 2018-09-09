function scrollForGift() {
let	popupGift = document.querySelector('.popup-gift'),
	giftImg = document.querySelector('.fixed-gift'),
	buttons = document.getElementsByTagName('button'),
	i = 0;

	document.body.addEventListener('click', function (event) {
		if (event.target && event.target.tagName == 'BUTTON' || event.target.className == 'popup-gift') i++;
	});		

	function scroll() {
		let doc = document.documentElement;

		if (doc.scrollHeight - doc.scrollTop === doc.clientHeight && i == 0) {		
			popupGift.style.display = 'block';
			giftImg.style.display = 'none';  
			window.removeEventListener('scroll', scroll);	
       }
	}

	window.addEventListener('scroll', scroll);
}

module.exports = scrollForGift;