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
