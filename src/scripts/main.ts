"use strict"

const weatherDescription = document.getElementById('weatherDescription')!;
const weatherIcon = document.getElementById('weatherIcon')!;
const weatherTemp = document.getElementById('weatherTemp')!;
const weatherHumidity = document.getElementById('weatherHumidity')!;

const jokesDiv = document.getElementById('jokeDiv')!;
const jokeContainer = document.querySelector('custom-background') as HTMLDivElement;
const submitButton = document.getElementById('submitButton') as HTMLButtonElement;
const ratingButtons = document.querySelectorAll('#ratingButtons button');
 


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


async function fetchRandomJoke(): Promise<string> {
  try {
    if (Math.round(Math.random())) {
      const res = await fetch('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } }); 
      return (await res.json()).joke;
    } else { 
      const res = await fetch ('https://api.chucknorris.io/jokes/random');
      return (await res.json()).value;
    }
  } catch (error) {
    console.error ('Error fetching joke:', error);
    return 'Error loading random joke, sorry';
  }
}









loadWeather();