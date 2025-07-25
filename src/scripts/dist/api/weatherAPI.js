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
export function loadWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('/api/weather');
            const data = yield response.json();
            const weatherDescription = document.getElementById('weatherDescription');
            const weatherIcon = document.getElementById('weatherIcon');
            const weatherTemp = document.getElementById('weatherTemp');
            const weatherHumidity = document.getElementById('weatherHumidity');
            weatherDescription.textContent = data.weather[0].description.toUpperCase();
            weatherIcon.innerHTML = `<img alt="weather-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
            weatherTemp.textContent = `${data.main.temp} °C`;
            weatherHumidity.textContent = `${data.main.humidity} %`;
        }
        catch (error) {
            console.error('Error loading weather:', error);
        }
    });
}
