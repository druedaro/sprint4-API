"use strict";
import { ratingButtons, setSelectedScore } from './jokeRating.js';
export function showJoke(joke) {
    const jokesDiv = document.getElementById('jokeDiv');
    jokesDiv.textContent = joke;
}
export function resetRatingUI() {
    ratingButtons.forEach(btn => btn.classList.remove('btn-selected'));
    setSelectedScore(null);
}
