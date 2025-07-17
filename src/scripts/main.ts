"use strict"

const weatherDescription = document.getElementById('weatherDescription')!;
const weatherIcon = document.getElementById('weatherIcon')!;
const weatherTemp = document.getElementById('weatherTemp')!;
const weatherHumidity = document.getElementById('weatherHumidity')!;


async function loadWeather (): Promise <void> {
  try {
    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=Barcelona&units=metric&appid=96cf2de381520089b251bc30cc3baf52`);
    const data = await response.json();

    weatherDescription.textContent = data.weather[0].description.toUpperCase();
    weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
    weatherTemp.textContent = `${data.main.temp} °C`;
    weatherHumidity.textContent = `${data.main.humidity} %`;
  } catch (error) {
    console.error('Error loading weather:', error);
  }
}

loadWeather();