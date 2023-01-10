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

const [piz, , risot, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(piz, risot, ...otherFoods);

//objects
//left side from = operator
const { sat, ...weekday } = restaurant.openingHours;
console.log(weekday);

//2)functions (rest pattern do the opposite of spread) spread = output , rest = input
const add = (...numbers) => {
  //can accept any amount of parameters
  console.log(numbers);
  console.log(...numbers);
};

add(2, 3);
add(5, 6, 7);
add(5, 4, 7, 8, 9, 8);

const x = [20, 15, 16];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
