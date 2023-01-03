"use strict";

const arr = [5, 10, 15];
const [x, y, z] = arr; //destructuring assignment
console.log(x, y, z);
console.log(arr);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschette", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

let [r, , s] = restaurant.categories;
console.log(r, s);
let [p, , , q] = restaurant.categories;
console.log(p, q);

[p, q] = [q, p];
console.log(p, q); //swap two variable values without intermediate variable

console.log(restaurant.order(2, 0));
let [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

const nested = [2, 4, [5, 6]];
//only get whole array part for b
const [a, , b] = nested;
console.log(a, b);

//get single element for each variable
const [c, , [d, e]] = nested;
console.log(c, d, e);
