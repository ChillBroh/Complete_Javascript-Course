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
  scores = [0, 0];
  activeplayer = 0;
  current = 0;
  playing = true;

  score0.innerHTML = 0;
  score1.innerHTML = 0;
  current0.innerHTML = 0;
  current1.innerHTML = 0;

  dice.classList.add("hidden");
  document.querySelector(".winner--0").classList.add("hiddenx");
  document.querySelector(".winner--1").classList.add("hiddenx");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
};
//calling new game when loading
again();

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
      switchP();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activeplayer] += current;
    console.log(scores[activeplayer]);
    document.getElementById(`score--${activeplayer}`).innerHTML =
      scores[activeplayer];

    if (scores[activeplayer] >= 100) {
      playing = false;
      dice.classList.add("hidden");

      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove("player--active");

      document
        .querySelector(`.winner--${activeplayer}`)
        .classList.remove("hiddenx");
    } else {
      switchP();
    }
  }
});
//create a newgame
btnNew.addEventListener("click", again);
