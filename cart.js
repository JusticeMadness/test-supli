export let cart = {
	shippingAddress: "114Ter chemins des pecheurs, 94410 Villeneuve-Saint-Georges",
	priceDetails: [],
	total: 0,
};

export const calculateCart = (fruit, value) => {
	cart.total = 0;
	let productFound = false;
	for (var i = 0; i < cart.priceDetails.length; i++) {
		if(cart.priceDetails[i].id === fruit.id) {
			cart.priceDetails[i].price = fruit.price * value;
			productFound = true;
		} 
	}
	if(productFound === false) {
		cart.priceDetails.push({
			id: fruit.id, 
			name: fruit.name,
			price: fruit.price * value, 
		});
	}
	for (var i = 0; i < cart.priceDetails.length; i++) {
		cart.total = cart.priceDetails[i].price + cart.total;
	}
}


