'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
//old way
/*
     const request = new XMLHttpRequest();
     request.open('GET', `https://restcountries.com/v2/name/${country}`);
     request.send();*/

//function for render coutry details
const renderCountry = (data, calssName = '') => {
  const html = ` 
      <article class="country ${calssName}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          data.population / 1000000
        ).toFixed(1)}M</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

//show error
const getCountryError = (msg) => {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

//modern way
const request = fetch('https://restcountries.com/v2/name/Sri Lanka');
console.log(request);

//practically using
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(
      (response) => response.json()
      //   (arr) => alert(arr) instead of this we can add catch at the end of the chain
    )
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      //ajax call 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, 'neighbour'))
    .catch((err) =>
      getCountryError(`Something went wrong, ${err.message}.Try Again!`)
    );
};

btn.addEventListener('click', function () {
  getCountryData('Sri Lanka');
});
