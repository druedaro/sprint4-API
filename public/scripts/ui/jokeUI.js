"use strict";
const jokeDiv = document.getElementById('joke-div');
export function renderJoke(joke) {
    const jokeDiv = document.getElementById('joke-div');
    if (!jokeDiv) {
        console.error('Elemento joke-div no encontrado');
        return;
    }
    jokeDiv.textContent = joke.joke;
}
