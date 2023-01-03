const arr = [7, 8, 9];
const newBadArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(newBadArr);

//with spread operator
const newSpred = [1, 2, ...arr];
console.log(newSpred);
console.log(...newSpred);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschette", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  pasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

const allFoods = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(allFoods);

//itterables: arrays, strings, maps, sets but not objects

const str = "Ishara";
console.log(...str);
console.log(...str[2]);

const ingredients = [
  prompt("Ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?"),
];
console.log(ingredients);

// restaurant.pasta(ingredients[1], ingredients[2], ingredients[3]);
restaurant.pasta(...ingredients);

//spread for objects (From es6)
const newRestaruent = { foundIn: 1191, ...restaurant, founder: "Ishara" };
console.log(newRestaruent);

const copyRestarurent = { ...restaurant };
copyRestarurent.name = "ChillBroh";
console.log(copyRestarurent);
