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
import { getWeather } from './features/weatherFeature.js';
import { getRandomJoke, scoreJoke } from './features/jokeFeature.js';
import { renderWeather } from './ui/weatherUI.js';
import { renderJoke } from './ui/jokeUI.js';
import { updateScoreUI, attachScoreListeners } from './ui/scoreUI.js';
import { changeBackgroundShape } from './ui/shapeUI.js';
let currentJoke = null;
let currentScore = null;
function loadWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            navigator.geolocation.getCurrentPosition((position) => __awaiter(this, void 0, void 0, function* () {
                const data = yield getWeather(position.coords.latitude, position.coords.longitude);
                renderWeather(data);
            }), (error) => {
                console.error('No se pudo obtener la ubicación:', error);
            });
        }
        catch (error) {
            console.error('Error al obtener el clima:', error);
        }
    });
}
function loadNewJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            currentJoke = yield getRandomJoke();
            renderJoke(currentJoke);
            currentScore = null;
            updateScoreUI();
            changeBackgroundShape();
        }
        catch (error) {
            console.error('Error al obtener chiste:', error);
        }
    });
}
function setupEventListeners() {
    const nextJokeBtn = document.getElementById('submit-button');
    if (nextJokeBtn) {
        nextJokeBtn.addEventListener('click', () => {
            if (currentJoke && currentScore !== null) {
                scoreJoke(currentJoke.joke, currentScore);
            }
            loadNewJoke();
        });
    }
    attachScoreListeners((score) => {
        currentScore = score;
        updateScoreUI(currentScore);
    });
}
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        yield loadWeather();
        yield loadNewJoke();
        setupEventListeners();
    });
}
init();
