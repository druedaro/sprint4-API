"use strict";
export function renderWeather(data) {
    const descriptionDiv = document.getElementById('weather-description');
    const iconDiv = document.getElementById('weather-icon');
    const tempDiv = document.getElementById('weather-temp');
    const humidityDiv = document.getElementById('weather-humidity');
    if (!data)
        return;
    descriptionDiv.textContent = data.weather[0].description.toUpperCase();
    const iconCode = data.weather[0].icon;
    iconDiv.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="Weather icon" />`;
    tempDiv.textContent = `${Math.round(data.main.temp)}°C`;
    humidityDiv.textContent = `💧 ${data.main.humidity}%`;
}
