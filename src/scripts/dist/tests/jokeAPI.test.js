var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchRandomJoke } from '../api/jokeAPI';
describe('fetchRandomJoke', () => {
    beforeEach(() => {
        global.fetch = jest.fn();
    });
    it('devuelve chiste de icanhazdadjoke', () => __awaiter(void 0, void 0, void 0, function* () {
        fetch.mockResolvedValueOnce({
            json: () => __awaiter(void 0, void 0, void 0, function* () { return ({ joke: 'Dad joke' }); }),
        });
        Math.random = () => 0.6; // para forzar la ruta icanhazdadjoke
        const joke = yield fetchRandomJoke();
        expect(joke).toBe('Dad joke');
    }));
    it('devuelve chiste de chucknorris.io', () => __awaiter(void 0, void 0, void 0, function* () {
        fetch.mockResolvedValueOnce({
            json: () => __awaiter(void 0, void 0, void 0, function* () { return ({ value: 'Chuck Norris joke' }); }),
        });
        Math.random = () => 0.4; // forzar la otra ruta
        const joke = yield fetchRandomJoke();
        expect(joke).toBe('Chuck Norris joke');
    }));
    it('maneja error y devuelve mensaje de error', () => __awaiter(void 0, void 0, void 0, function* () {
        fetch.mockRejectedValueOnce(new Error('Network error'));
        const joke = yield fetchRandomJoke();
        expect(joke).toBe('Error loading random joke, sorry');
    }));
});
