"use strict";
const jokeDiv = document.getElementById('jokeDiv');
export function renderJoke(joke) {
    jokeDiv.textContent = joke.joke;
}
