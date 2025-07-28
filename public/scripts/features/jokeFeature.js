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
import { apiClient } from '../api-service/apiClient.js';
import { jokeEndpoints } from '../config/endpoints.js';
export function getDadJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = jokeEndpoints.dadJokes;
        const response = yield fetch(url, {
            headers: { Accept: 'application/json' },
        });
        if (!response.ok) {
            throw new Error('Error al obtener chiste dad joke');
        }
        const data = yield response.json();
        return { id: data.id, joke: data.joke };
    });
}
export function getChuckNorrisJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = jokeEndpoints.chuckNorris;
            return yield apiClient(url);
        }
        catch (error) {
            console.error('Error al obtener chiste Chuck Norris:', error);
            return { id: 'error', joke: 'No se pudo cargar la broma, prueba otra vez.' };
        }
    });
}
export function getRandomJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const random = Math.random();
        if (random < 0.5) {
            return getDadJoke();
        }
        else {
            return getChuckNorrisJoke();
        }
    });
}
export function scoreJoke(joke, score) {
    const report = {
        joke,
        score,
        date: new Date().toISOString(),
    };
    console.log('Nuevo registro en reportAcudits:', report);
}
