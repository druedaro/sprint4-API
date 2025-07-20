"use strict"


import { loadWeather } from './api/weatherAPI.js';
import { fetchRandomJoke } from './api/jokeAPI.js';
import { changeJokeShape } from './components/jokeShapes.js';
import { JokeReport } from './types/types.js';
import { selectedScore } from './components/jokeRating.js';
import { showJoke, resetRatingUI } from './components/jokeUI.js';

const submitButton = document.getElementById('submitButton') as HTMLButtonElement;

let currentJoke: string = '';
let reportJokes: JokeReport[] = [];

async function loadJoke(): Promise<void> {
  currentJoke = await fetchRandomJoke();
  showJoke(currentJoke);
  console.log('New joke:', currentJoke);

  resetRatingUI();
  changeJokeShape();
}

submitButton.addEventListener('click', () => {
  const finalScore = selectedScore !== null ? selectedScore : 0;
  reportJokes.push(new JokeReport(currentJoke, finalScore, new Date().toISOString()));
  console.log('Jokes report:', reportJokes);

  loadJoke();
});

loadWeather();
loadJoke();
