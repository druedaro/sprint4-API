"use strict"

import { getWeather } from './features/weatherFeature';
import { getRandomJoke, scoreJoke } from './features/jokeFeature';
import { renderWeather } from './ui/weatherUI';
import { renderJoke } from './ui/jokeUI';
import { updateScoreUI, attachScoreListeners } from './ui/scoreUI';
import { changeBackgroundShape } from './ui/shapeUI';
import type { Joke } from './features/jokeFeature';

let currentJoke: Joke | null = null;

let currentScore: number | null = null;


async function loadWeather() {
  try {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const data = await getWeather(position.coords.latitude, position.coords.longitude);
      renderWeather(data);
    }, (error) => {
      console.error('No se pudo obtener la ubicación:', error);
    });
  } catch (error) {
    console.error('Error al obtener el clima:', error);
  }
}

async function loadNewJoke() {
  try {
    currentJoke = await getRandomJoke();
    renderJoke(currentJoke);
    currentScore = null;             
    updateScoreUI();                 
    changeBackgroundShape();         
  } catch (error) {
    console.error('Error al obtener chiste:', error);
  }
}

function setupEventListeners() {
  const nextJokeBtn = document.getElementById('submit-button');
  if (nextJokeBtn) {
    nextJokeBtn.addEventListener('click', () => {
      if (currentJoke && currentScore !== null) {
        scoreJoke(currentJoke.joke, currentScore);
      }
      loadNewJoke();
    });
  }

  attachScoreListeners((score: number | null) => {
    currentScore = score;
    updateScoreUI(currentScore);
  });
}

async function init() {
  await loadWeather();
  await loadNewJoke();
  setupEventListeners();
}

init();

