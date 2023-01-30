'use strict';

const btn = document.querySelector('.btn-country');

btn.addEventListener('click', function () {
  const whereAmI = async function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`).then((res) =>
      console.log(res)
    );
  };
  console.log('First');
  console.log('second');
  whereAmI('sri lanka');
  console.log('third');

  //with await
  setTimeout(function () {
    //added a timer to clean the mess of code
    const whereAmI2 = async function (country) {
      const ans = await fetch(`https://restcountries.com/v2/name/${country}`);
      console.log(ans);
    };
    console.log('First');
    console.log('second');
    whereAmI2('sri lanka');
    console.log('third');
  }, 2000);
});
