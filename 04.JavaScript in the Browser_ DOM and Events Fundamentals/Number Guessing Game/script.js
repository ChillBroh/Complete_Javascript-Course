"use strict";
let generate = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const input = () => {
  const inputNum = Number(document.querySelector(".input-check").value);
  console.log(generate, typeof generate);
  console.log(inputNum, typeof inputNum);
  if (!inputNum) {
    message("Please enter a value");
  }
  //if entered number and generated number different
  else if (inputNum !== generate) {
    if (score > 1) {
      message(check(generate, inputNum));
      document.querySelector("body").style.backgroundColor = "red";

      score--;
      document.querySelector(".score-value").innerHTML = score;
    } else {
      if (score == 1) {
        score--;
        document.querySelector(".score-value").innerHTML = score;
        message("You loss!");
        document.querySelector(".input-check").readOnly = true;
      }
    }
  }
  //if numbers are matching
  else if (inputNum === generate) {
    if (score >= 1) {
      message("Correct Number! you Won!");
      document.querySelector(".number").innerHTML = generate;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "200px";
      document.querySelector(".number").style.marginLeft = "40%";

      if (score > highScore) {
        highScore = score;
        document.querySelector(".high-score-value").innerHTML = score;
      }
      document.querySelector(".input-check").readOnly = true;
    } else {
      message("You Loss!");
    }
  }
};

const check = (gen, input) => {
  const html = gen < input ? "Too high" : "Too low";
  return html;
};

const message = (message) => {
  document.querySelector(".guessing").innerHTML = message;
};

const again = () => {
  score = 20;
  generate = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  message("Start guessing...");
  document.querySelector(".score-value").innerHTML = score;
  document.querySelector(".number").innerHTML = "?";
  document.querySelector(".input-check").readOnly = false;
  document.querySelector(".input-check").value = "";
  document.querySelector("body").style.backgroundColor = "#333";
  document.querySelector(".number").style.width = "111px";
};
