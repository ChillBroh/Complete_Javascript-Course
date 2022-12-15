'use strict';

const btnShowModel = document.querySelectorAll('.show-modal');
const btnCloseModel = document.querySelector('.close-modal');
const overley = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const openModel = () => {
  modal.classList.remove('hidden');
  overley.classList.remove('hidden');
};

const closeModel = () => {
  modal.classList.add('hidden');
  overley.classList.add('hidden');
};

for (let i = 0; i < btnShowModel.length; i++) {
  btnShowModel[i].addEventListener('click', openModel);
}

btnCloseModel.addEventListener('click', closeModel);
overley.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape') {
    closeModel();
  }
});
