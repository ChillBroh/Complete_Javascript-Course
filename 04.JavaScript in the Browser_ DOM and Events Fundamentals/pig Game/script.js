"use strict";

const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");

const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
score0.innerHTML = 0;
score1.innerHTML = 0;
dice.classList.add("hidden");

const again = () => {
  score0.innerHTML = 0;
  score1.innerHTML = 0;
  current0.innerHTML = 0;
  current1.innerHTML = 0;

  dice.classList.add("hidden");
};

btnNew.addEventListener("click", again);

btnRoll.addEventListener("click", function () {
  const randNum = Math.trunc(Math.random() * 6) + 1;
  current0.innerHTML = randNum;
  dice.src = `./images/dice-${randNum}.png`;
  dice.classList.remove("hidden");
});
