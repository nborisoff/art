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