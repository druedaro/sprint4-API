// src/scripts/tests/weatherAPI.test.ts
import { loadWeather } from '../api/weatherAPI';

describe('loadWeather', () => {
  beforeEach(() => {
    // Simulamos el DOM necesario
    document.body.innerHTML = `
      <div id="weatherDescription"></div>
      <div id="weatherIcon"></div>
      <div id="weatherTemp"></div>
      <div id="weatherHumidity"></div>
    `;
  });

  it('update the DOM with the weather data', async () => {
    // Mock de fetch
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          weather: [{ description: 'clear sky', icon: '01d' }],
          main: { temp: 20, humidity: 60 }
        })
      })
    ) as jest.Mock;

    await loadWeather();

    expect(document.getElementById('weatherDescription')!.textContent).toBe('CLEAR SKY');
    expect(document.getElementById('weatherIcon')!.innerHTML).toContain('01d');
    expect(document.getElementById('weatherTemp')!.textContent).toBe('20 °C');
    expect(document.getElementById('weatherHumidity')!.textContent).toBe('60 %');
  });
});
