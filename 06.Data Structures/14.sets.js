const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'pizza',
]);
console.log(orderSet); //this will remove the duplicates in the list

//this will give separate letters in the word
console.log(new Set('Ishara'));

//get suze of the set
console.log(orderSet.size);

//check if available
console.log(orderSet.has('chill'));
console.log(orderSet.has('Pizza')); //same as includes method in array

//add element
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');

//delete from set
orderSet.delete('Risotto');
console.log(orderSet);

//cannot get data out from the set in js

//itarate data from set
for (const order of orderSet) {
  console.log(order);
}

//delete all elemens in the set
orderSet.clear();
console.log(orderSet);

const staffArr = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffSet = [...new Set(staffArr)];
console.log(staffSet);
console.log(
  new Set('Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter').size
);
