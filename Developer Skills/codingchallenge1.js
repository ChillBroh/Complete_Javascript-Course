"use strict";

const printForecast = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + ` ...${arr[i]}C in ${i + 1} days`;
    // process.stdout.write("..." + arr[i] + "C in " + (i + 1) + " days");
  }
  return str;
};
const array = [17, 21, 23];
console.log(printForecast(array));
