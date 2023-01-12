const movements = [200, -200, 340, -300, -20, 50, 400, -460];
const eurToUSD = 2;

// const movementsUSD = movements.map(function (arr) {
//   return arr * eurToUSD;
// });

//using arow function
const movementsUSD = movements.map(arr => arr * eurToUSD);
//map array create new array with the given arithmetic operation
console.log(movements);
console.log(movementsUSD);
