'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschette', 'Garlic', 'Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPizza: (Main, ...other) => {
    console.log(Main);
    console.log(other);
  },
};

const keys = Object.keys(restaurant.openingHours);
console.log(keys);

const values = Object.values(restaurant.openingHours);
console.log(values);

const entries = Object.entries(restaurant.openingHours);
console.log(values);

let open = `We open ${keys.length} days : `;
for (const days of keys) {
  open += `${days},`;
}

console.log(open);

for (const [key, value] of entries) {
  console.log(`On ${key} open at ${value.open} and close at ${value.close}`);
}

//using destructure
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} open at ${open} and close at ${close}`);
}
