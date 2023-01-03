const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschette", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (obj) {
    console.log(
      `Order recevied! 
      ${this.starterMenu[obj.starterIndex]} and ${
        this.mainMenu[obj.mainIndex]
      } will be delivered to ${obj.address} at ${obj.time}`
    );
  },
};

object = {
  time: "22.30",
  address: "Galle, Srilanka",
  mainIndex: 2,
  starterIndex: 2,
};

restaurant.orderDelivery(object);
