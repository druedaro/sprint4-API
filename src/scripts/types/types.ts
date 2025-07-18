"use strict"

export class JokeReport {
    joke: string;
    score: number;
    date: string;

    constructor (joke: string, score: number, date: string) {
        this.joke = joke;
        this.score = score;
        this.date = date;
    }
}