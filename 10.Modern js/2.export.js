//Method 1
// import { addToCart, totalPrice as price, qt } from "./1.shoppingcart.js";
// addToCart("Bread", 5);
// console.log(qt);
// console.log(price); //can rename like this

//Method 2
import * as SHoppintCart from "./1.shoppingcart.js"; //import all at once. pass all as a sinle object
import add from "./3.default export.js"; //can give any name, no ndd of curly braces

console.log(SHoppintCart);
SHoppintCart.addToCart("bread", 5);
console.log(SHoppintCart.totalPrice);

add("Tomato", 6);
