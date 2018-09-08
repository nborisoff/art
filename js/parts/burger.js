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