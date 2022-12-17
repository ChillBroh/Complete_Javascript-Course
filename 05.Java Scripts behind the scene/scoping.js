"use strict";

document.getElementById("btn").addEventListener("click", () => {
  const myName = "ishara";
  first();
  function first() {
    const age = 25;

    if (age >= 25) {
      const decade = 3;
      var millenial = true;
    }

    function second() {
      const job = "student";

      console.log(`${myName} is a ${age} -old ${job}`);
    }

    second();
  }
});
