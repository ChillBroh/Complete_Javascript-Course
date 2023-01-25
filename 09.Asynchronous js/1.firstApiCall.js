'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//this is  the most old method xmlhttprequest
const request = new XMLHttpRequest();
//open requst
request.open('GET', 'https://restcountries.com/v3.1/name/Srilanka');
//send request
request.send();

//add event listner when call a function after the ajax call done loading
request.addEventListener('load', function () {
  console.log(this.responseText);
  //convert jason file to js object
  const data = JSON.parse(this.responseText);
  console.log(data);
});
