"use strict";
const jokeDiv = document.getElementById('joke-div');
export function renderJoke(joke) {
    jokeDiv.textContent = joke.joke;
}
