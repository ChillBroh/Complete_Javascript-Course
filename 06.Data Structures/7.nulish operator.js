guest = 15; //0, null, undefined and empty string will out 10
const guestCorrect = guest ? guest : 10;
console.log(guestCorrect);

//nulish operator ??

guest2 = null; //null, undefined will out 10
const guestCorrect2 = guest2 ?? 10;
console.log(guestCorrect2);

guest2 = 0; //null, undefined will out 10
const guestCorrect3 = guest2 ?? 10;
console.log(guestCorrect3);

guest2 = 20; //null, undefined will out 10
const guestCorrect4 = guest2 ?? 10;
console.log(guestCorrect4);
