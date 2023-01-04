const weekday = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
openingHours = {
  [weekday[3]]: {
    open: 12,
    close: 22,
  },
  [weekday[4]]: {
    open: 11,
    close: 23,
  },
  [weekday[6]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschette", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //   order: function (starterIndex, mainIndex) { - older way for functions
  //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  //   },

  //es6 object literals
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  pasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  // openHours: openingHours - old method
  openingHours, //with es6 enhanced object literals
};

// console.log(restaurant.openHours);
console.log(restaurant.openingHours);
