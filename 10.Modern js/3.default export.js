const cart = [];

export default (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
};

//this use when we want to one export from a module
