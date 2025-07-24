"use strict"

import { ratingButtons, setSelectedScore  } from './jokeRating.js';

export function showJoke(joke: string): void {
  const jokesDiv = document.getElementById('jokeDiv')!;
  jokesDiv.textContent = joke;
}


export function resetRatingUI(): void {
  ratingButtons.forEach(btn => btn.classList.remove('btn-selected'));

setSelectedScore(null);
}
