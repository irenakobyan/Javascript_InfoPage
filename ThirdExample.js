function createProduct() {
	var product = {
		type: 'type',
		img:  'image',
		price: 50,
		logDetails: function() {
			return Object.keys();
		}
	}

	Object.defineProperty(product, 'price', {
  		writable: false
	});

	Object.defineProperty(product, 'img',({
  		configurable: false
	});
}

