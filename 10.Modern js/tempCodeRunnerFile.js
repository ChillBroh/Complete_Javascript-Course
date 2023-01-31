export.addToCart = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to the cart`);
  };


//import  
const {addToCart} = require('./1.shoppingcart')