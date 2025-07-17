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
const weatherDescription = document.getElementById('weatherDescription');
const weatherIcon = document.getElementById('weatherIcon');
const weatherTemp = document.getElementById('weatherTemp');
const weatherHumidity = document.getElementById('weatherHumidity');
const jokesDiv = document.getElementById('jokeDiv');
const jokeContainer = document.querySelector('.custom-background');
const submitButton = document.getElementById('submitButton');
const ratingButtons = document.querySelectorAll('#ratingButtons button');
let currentJoke = '';
let selectedScore = null;
let reportJokes = [];
function changeJokeShape() {
    const shapes = ['shape-1', 'shape-2', 'shape-3', 'shape-4', 'shape-5', 'shape-6'];
    const currentShape = shapes.find(shape => jokeContainer.classList.contains(shape));
    const availableShapes = shapes.filter(shape => shape != currentShape);
    const newShape = availableShapes[Math.floor(Math.random() * availableShapes.length)];
    shapes.forEach(shape => jokeContainer.classList.remove(shape));
    jokeContainer.classList.add(newShape);
}
function loadWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=Barcelona&units=metric&appid=96cf2de381520089b251bc30cc3baf52`);
            const data = yield response.json();
            weatherDescription.textContent = data.weather[0].description.toUpperCase();
            weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
            weatherTemp.textContent = `${data.main.temp} °C`;
            weatherHumidity.textContent = `${data.main.humidity} %`;
        }
        catch (error) {
            console.error('Error loading weather:', error);
        }
    });
}
function fetchRandomJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (Math.round(Math.random())) {
                const res = yield fetch('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } });
                return (yield res.json()).joke;
            }
            else {
                const res = yield fetch('https://api.chucknorris.io/jokes/random');
                return (yield res.json()).value;
            }
        }
        catch (error) {
            console.error('Error fetching joke:', error);
            return 'Error loading random joke, sorry';
        }
    });
}
function loadJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        currentJoke = yield fetchRandomJoke();
        jokesDiv.textContent = currentJoke;
        console.log('New joke:', currentJoke);
        selectedScore = null;
        ratingButtons.forEach(btn => btn.classList.remove('btn-selected'));
        changeJokeShape();
    });
}
ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        const score = parseInt(button.getAttribute('data-score'));
        if (selectedScore === score) {
            selectedScore = null;
            button.classList.remove('btn-selected');
        }
        else {
            ratingButtons.forEach(btn => btn.classList.remove('btn-selected'));
            selectedScore = score;
            button.classList.add('btn-selected');
        }
    });
});
submitButton.addEventListener('click', () => {
    const finalScore = selectedScore !== null ? selectedScore : 0;
    reportJokes.push({ joke: currentJoke, score: finalScore, date: new Date().toISOString() });
    console.log('Jokes report:', reportJokes);
    loadJoke();
});
loadWeather();
loadJoke();
