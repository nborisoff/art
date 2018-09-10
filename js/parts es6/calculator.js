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