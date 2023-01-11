'use strict';

const quest = new Map([
  ['question', 'what is the best programming language in the world? '],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  [true, 'You are correct'],
  [false, 'You are wrong'],
]);

console.log(quest);

console.log(quest.get('question'));

for (const [k, v] of quest) {
  if (typeof k === 'number') console.log(`Answer ${k} : ${v}`);
}

const ans = prompt('Enter Your Answer');
console.log(quest.get(ans == 3));
