//map use to map values to keys
const rest = new Map();
rest.set('Name', 'Classico Italiano');
rest.set(1, 'Lisbon, Portugal');

//this set method set values to map and also it will return the values
console.log(rest.set(2, 'Firenze, Italy'));
console.log(...rest);

rest
  .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('opne', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'Sorry we are closed');

//get outputs from map
console.log(rest.get('Name'));
console.log(rest.get(true));
