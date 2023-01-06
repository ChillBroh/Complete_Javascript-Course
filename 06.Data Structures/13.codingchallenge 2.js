'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
for (const [i, goal] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${goal}`);
}

//2.
let sum = 0;
const values = Object.values(game.odds);
for (const value of values) {
  sum += value;
}
console.log(`Average of odds is ${sum / Object.keys(game.odds).length}`);

//3.
for (const [key, value] of Object.entries(game.odds)) {
  let i = 0;
  let result = key === 'x' ? 'draw' : `victory ${game[key]}`;
  console.log(`odd of ${result} : ${value}`);
  i += 1;
}

//bonus
let goals = 0;
let test = [];
let obj = {};
let str = '';
for (const x of game.scored) {
  if (!test.includes(x)) {
    test.push(x);
  }
}
console.log(test);
for (const name of test) {
  for (const chk of game.scored) {
    name === chk ? (goals += 1) : goals;
  }
  console.log(`${name}: ${goals}`);
  goals = 0;
}

console.log(obj);
