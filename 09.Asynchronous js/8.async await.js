'use strict';

const btn = document.querySelector('.btn-country');

const mycountry = () => {
  const whereAmI = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
      .then((res) => {
        console.log(res);
        res.json();
      })
      .then((data) => console.log(data));
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
      const data = await ans.json(); //no need of then method when we use await
      console.log(data);
    };
    console.log('First');
    console.log('second');
    whereAmI2('sri lanka');
    console.log('third');
  }, 2000);
};
btn.addEventListener('click', () => {
  mycountry('srilanka');
});
