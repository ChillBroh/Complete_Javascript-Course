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
};

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);
