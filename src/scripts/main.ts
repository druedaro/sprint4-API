"use strict"

const weatherDescription = document.getElementById('weatherDescription')!;
const weatherIcon = document.getElementById('weatherIcon')!;
const weatherTemp = document.getElementById('weatherTemp')!;
const weatherHumidity = document.getElementById('weatherHumidity')!;

const jokesDiv = document.getElementById('jokeDiv')!;
const jokeContainer = document.querySelector('.custom-background') as HTMLDivElement;
const submitButton = document.getElementById('submitButton') as HTMLButtonElement;
const ratingButtons = document.querySelectorAll('#ratingButtons button');

interface JokeReport {
  joke: string;
  score: number;
  date: string;
}

let currentJoke: string = '';
let selectedScore: number | null = null;
let reportJokes: JokeReport[] = [];


function changeJokeShape():void {
  const shapes = ['shape-1', 'shape-2', 'shape-3', 'shape-4', 'shape-5', 'shape-6'];
  const currentShape = shapes.find(shape => jokeContainer.classList.contains(shape));

  const availableShapes = shapes.filter(shape => shape != currentShape);

  const newShape = availableShapes[Math.floor(Math.random() * availableShapes.length)];

  shapes.forEach(shape => jokeContainer.classList.remove(shape));
  jokeContainer.classList.add(newShape)
}

async function loadWeather (): Promise <void> {
  try {
    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=Barcelona&units=metric&appid=96cf2de381520089b251bc30cc3baf52`);
    const data = await response.json();

    weatherDescription.textContent = data.weather[0].description.toUpperCase();
    weatherIcon.innerHTML = `<img  alt="weather-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
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

async function loadJoke(): Promise<void> {
  currentJoke = await fetchRandomJoke();
  jokesDiv.textContent = currentJoke;
  console.log('New joke:', currentJoke);

  selectedScore = null;
  ratingButtons.forEach(btn => btn.classList.remove('btn-selected'));

  changeJokeShape();
  
}


ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    const score = parseInt(button.getAttribute('data-score')!);
    if (selectedScore === score) {
      selectedScore = null;
      button.classList.remove('btn-selected');
    } else {
      ratingButtons.forEach(btn => btn.classList.remove('btn-selected'));
      selectedScore = score;
      button.classList.add('btn-selected');
    }
  });
});

submitButton.addEventListener('click', () => {
    const finalScore = selectedScore !== null ? selectedScore : 0;
    reportJokes.push({ joke: currentJoke, score: finalScore, date: new Date().toISOString() });
    console.log('Jokes report:', reportJokes);

  loadJoke();
});









loadWeather();
loadJoke();