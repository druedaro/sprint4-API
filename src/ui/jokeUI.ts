"use strict"

import { Joke } from '../features/jokeFeature.js';

const jokeDiv = document.getElementById('joke-div') as HTMLElement;

export function renderJoke(joke: Joke) {
  const jokeDiv = document.getElementById('joke-div');
  if (!jokeDiv) {
    console.error('Elemento joke-div no encontrado');
    return;
  }
  jokeDiv.textContent = joke.joke;
}

