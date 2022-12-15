"use strict";
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");

let playing, activeplayer, scores, current;

score0.innerHTML = 0;
score1.innerHTML = 0;
current0.innerHTML = 0;
current1.innerHTML = 0;
dice.classList.add("hidden");

const again = () => {
  scores = 0;
  activeplayer = 0;
  current = 0;
  playing = true;

  score0.innerHTML = 0;
  score1.innerHTML = 0;
  current0.innerHTML = 0;
  current1.innerHTML = 0;

  dice.classList.add("hidden");
};
//create a newgame
btnNew.addEventListener("click", again);

//switch current player
const switchP = () => {
  document.getElementById(`current--${activeplayer}`).innerHTML = 0;
  current = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

//click roll dice button
btnRoll.addEventListener("click", function () {
  //check the game situation
  if (playing) {
    //generate random numebr
    const randNum = Math.trunc(Math.random() * 6) + 1;
    //change image
    dice.src = `./images/dice-${randNum}.png`;
    dice.classList.remove("hidden");

    if (randNum !== 1) {
      current = current + randNum;
      document.getElementById(`current--${activeplayer}`).innerHTML = current;
    } else {
      //switch to next player
      scores = current;
      document.getElementById(`score--${activeplayer}`).innerHTML = scores;
      switchP();
    }
  }
});

btnHold.addEventListener("click", function () {});
