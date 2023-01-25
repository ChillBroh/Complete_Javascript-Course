'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//this is  the most old method xmlhttprequest
const request = new XMLHttpRequest();
//open requst
request.open('GET', 'https://restcountries.com/v3.1/name/portugal');
//send request
request.send();

//add event listner when call a function after the ajax call done loading
request.addEventListener('load', function () {
  //convert jason file to js object
  const [data] = JSON.parse(this.responseText);
  console.log(data);
  console.log(...data.capital);

  const html = ` 
  <article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      data.population / 1000000
    ).toFixed(1)}M</p>
    <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
    <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
});
