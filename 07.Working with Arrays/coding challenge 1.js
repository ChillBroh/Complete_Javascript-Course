/*test data
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]*/
const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

const checkDogs = arr => {
  arr.forEach((mov, i) => {
    const type = mov >= 3 ? 'adult' : 'puppy';
    console.log(`${i + 1} is a ${type}`);
  });
};
checkDogs(julia);

//1.
const julia1 = [...julia];
julia1.splice(-2);
julia1.shift();
console.log(julia1);

//2.
const allDogs = [...julia1, ...kate];
checkDogs(allDogs);
