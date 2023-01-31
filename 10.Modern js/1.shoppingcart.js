console.log("Export shopping cart module");

const shippingCost = 10;
export const cart = [];

export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
};

const totalPrice = 230;
const totalQuantity = 50;

export { totalPrice, totalQuantity as qt }; //export more than one
