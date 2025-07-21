"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { loadWeather } from './api/weatherAPI.js';
import { fetchRandomJoke } from './api/jokeAPI.js';
import { changeJokeShape } from './components/jokeShapes.js';
import { JokeReport } from './types/types.js';
import { selectedScore } from './components/jokeRating.js';
import { showJoke, resetRatingUI } from './components/jokeUI.js';
const submitButton = document.getElementById('submitButton');
let currentJoke = '';
let reportJokes = [];
function loadJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        currentJoke = yield fetchRandomJoke();
        showJoke(currentJoke);
        console.log('New joke:', currentJoke);
        resetRatingUI();
        changeJokeShape();
    });
}
submitButton.addEventListener('click', () => {
    const finalScore = selectedScore !== null ? selectedScore : 0;
    reportJokes.push(new JokeReport(currentJoke, finalScore, new Date().toISOString()));
    console.log('Jokes report:', reportJokes);
    loadJoke();
});
loadWeather();
loadJoke();
