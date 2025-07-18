"use strict";
import { ratingButtons } from './jokeRating.js';
const jokesDiv = document.getElementById('jokeDiv');
export function showJoke(joke) {
    jokesDiv.textContent = joke;
}
export function resetRatingUI() {
    ratingButtons.forEach(btn => btn.classList.remove('btn-selected'));
}
