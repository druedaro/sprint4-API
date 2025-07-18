"use strict"

import { ratingButtons } from './jokeRating.js';

const jokesDiv = document.getElementById('jokeDiv')!;

export function showJoke(joke: string): void {
  jokesDiv.textContent = joke;
}

export function resetRatingUI(): void {
  ratingButtons.forEach(btn => btn.classList.remove('btn-selected'));
}
