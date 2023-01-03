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
};

const [p, , q] = restaurant.categories;
console.log(p, q);

[p, q] = [q, p];
console.log(p, q);
