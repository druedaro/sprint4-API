"use strict";

import { getWeather } from './features/weatherFeature.js';
import { getRandomJoke, scoreJoke } from './features/jokeFeature.js';
import { renderWeather } from './ui/weatherUI.js';
import { renderJoke } from './ui/jokeUI.js';
import { updateScoreUI, attachScoreListeners } from './ui/scoreUI.js';
import { changeBackgroundShape } from './ui/shapeUI.js';
import type { Joke } from './features/jokeFeature.js';

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
    console.log('Joke loaded:', currentJoke);
    renderJoke(currentJoke);
    currentScore = null;
    updateScoreUI();
    changeBackgroundShape();
  } catch (error) {
    console.error('Error loading joke:', error);
    renderJoke({ id: 'error', joke: 'No se pudo cargar la broma.' });
  }
}

function setupEventListeners() {
  const nextJokeBtn = document.getElementById('submit-button') as HTMLButtonElement | null;
  if (nextJokeBtn) {
    nextJokeBtn.addEventListener('click', async () => {
      console.log('Click Next Joke');
      if (currentJoke && currentScore !== null) {
        scoreJoke(currentJoke.joke, currentScore);
      }
      nextJokeBtn.disabled = true;
      try {
        await loadNewJoke();
      } catch (e) {
        console.error('Error loading joke:', e);
        alert('Error cargando la broma, inténtalo de nuevo.');
      } finally {
        nextJokeBtn.disabled = false;
      }
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
