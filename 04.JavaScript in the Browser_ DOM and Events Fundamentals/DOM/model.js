'use strict';

const btnShowModel = document.querySelectorAll('.show-modal');
const btnCloseModel = document.querySelector('.close-modal');
const overley = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

for (let i = 0; i < btnShowModel.length; i++) {
  btnShowModel[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overley.classList.remove('hidden');
  });
}

btnCloseModel.addEventListener('click', function () {
  modal.classList.add('hidden');
  overley.classList.add('hidden');
});
