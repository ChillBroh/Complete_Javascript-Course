let a = 111;
let b = 500;

const obj = { a: 23, b: 50, c: 80 };

//must wrap with paranthasis
({ a, b } = obj);

console.log(a, b);
