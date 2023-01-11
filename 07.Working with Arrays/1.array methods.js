let array = ['a', 'b', 'c', 'd', 'e'];

//slice
console.log(array.slice(2));
console.log(array.slice(2, -1));

//splice - extracted elements are gone from original array
let array2 = array;
console.log(array2.splice(2));
console.log(array2); //mutate original

//reverse
let array3 = ['j', 'i', 'h', 'g', 'f'];
console.log(array3.reverse());
console.log(array3); //mutate original

//concat
let array4 = array.concat(array3);
console.log(array4);
console.log([...array, ...array3]);

//join
console.log(array4.join(' - '));
