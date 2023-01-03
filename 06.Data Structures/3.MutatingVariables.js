let a = 111;
let b = 500;

const obj = { a: 23, b: 50, c: 80 };

//must wrap with paranthasis
({ a, b } = obj);

console.log(a, b);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschette", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
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
};

//nested destructering of object
const { fri } = restaurant.openingHours;
console.log(fri);

const {
  fri: { open, close },
} = restaurant.openingHours;

console.log(open, close);
