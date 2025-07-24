var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    it('update the DOM with the weather data', () => __awaiter(void 0, void 0, void 0, function* () {
        // Mock de fetch
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({
                weather: [{ description: 'clear sky', icon: '01d' }],
                main: { temp: 20, humidity: 60 }
            })
        }));
        yield loadWeather();
        expect(document.getElementById('weatherDescription').textContent).toBe('CLEAR SKY');
        expect(document.getElementById('weatherIcon').innerHTML).toContain('01d');
        expect(document.getElementById('weatherTemp').textContent).toBe('20 °C');
        expect(document.getElementById('weatherHumidity').textContent).toBe('60 %');
    }));
});
