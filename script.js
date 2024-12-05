"use strict";
const apiKey = "871a3b913df8b5c4e3849e30006356ca";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=germany`;

async function checkWeather() {
  const response = await fetch(apiUrl + `$appid=${apiKey}`);
  let data = await response.json();
  console.log(data);
}

checkWeather();
