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

//Jason
const getJason = function (url, error = 'Something is not right!!') {
  return fetch(url).then((response) => {
    console.log(response);

    if (!response.ok) throw new Error(`${error} ${response.status} `);

    return response.json();
  });
};

//modern way
const request = fetch('https://restcountries.com/v2/name/Sri Lanka');
console.log(request);

//practically using
const getCountryData = function (country) {
  getJason(`https://restcountries.com/v2/name/${country}`, 'Country Not found')
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      //   const neighbour = 'hehe';

      if (!neighbour) throw new Error('There is no neighbour for the Country');

      //ajax call 2
      return getJason(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        `Neighbour Country not found!`
      );
    })
    .then((data) => renderCountry(data, 'neighbour'))
    .catch(
      (err) =>
        getCountryError(`Something went wrong, ${err.message}. Try Again!`) //error messaage will be the thrown one
    );
};

btn.addEventListener('click', function () {
  getCountryData('Sri Lanka');
});
