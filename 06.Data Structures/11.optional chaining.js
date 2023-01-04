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

//without optional chaining
if (restaurant.openingHours.fri && restaurant.openingHours) {
  console.log(restaurant.openingHours.fri.open);
}
// //or
// console.log(restaurant.openingHours.mon.open); //this wil  generate error
//with optional chaining
console.log(restaurant.openingHours?.fri?.open); //check opeming hours and friday existence

const day = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const d of day) {
  const open = restaurant.openingHours?.[d]?.open ?? 'closed';
  const close = restaurant.openingHours?.[d]?.close || 'closed';
  console.log(`${d} open at ${open} and close at ${close}`);
  console.log();
}

//method callint with optional chaining

console.log(restaurant.order?.(2, 1) ?? 'please enter available methods ');
console.log(restaurant.orde?.(2, 3) ?? 'please enter available methods');

//Arrays
const users = [{ name: 'ishara', email: 'ishara@gmail.com' }];
console.log(users[0]?.name ?? 'Sorry this user not exists');
console.log(users[1]?.name ?? 'Sorry this user not exists');
