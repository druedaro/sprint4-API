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
export function fetchRandomJoke() {
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
