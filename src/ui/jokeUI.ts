"use strict"

import { Joke } from '../features/jokeFeature.js';

const jokeDiv = document.getElementById('jokeDiv') as HTMLElement;

export function renderJoke(joke: Joke) {
  jokeDiv.textContent = joke.joke;
}
