"use strict"

export function renderWeather(data: any) {
  const descriptionDiv = document.getElementById('weather-description') as HTMLElement;
  const iconDiv = document.getElementById('weather-icon') as HTMLElement;
  const tempDiv = document.getElementById('weather-temp') as HTMLElement;
  const humidityDiv = document.getElementById('weather-humidity') as HTMLElement;

  if (!data) return;

  descriptionDiv.textContent = data.weather[0].description.toUpperCase();

  const iconCode = data.weather[0].icon;
  iconDiv.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="Weather icon" />`;

  tempDiv.textContent = `${Math.round(data.main.temp)}°C`;
  humidityDiv.textContent = `💧 ${data.main.humidity}%`;
}
