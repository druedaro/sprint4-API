"use strict";

import { apiClient } from '../api-service/apiClient.js';
import { jokeEndpoints } from '../config/endpoints.js';
import { JokeReport } from '../models/jokeReport.js';

export interface Joke {
  id: string;
  joke: string;
}

const reportAcudits: JokeReport[] = [];

export async function getDadJoke(): Promise<Joke> {
  const data = await apiClient<{id: string, joke: string}>(jokeEndpoints.dadJokes, {
    headers: { Accept: 'application/json' }
  });
  
  return { 
    id: data.id, 
    joke: data.joke 
  };
}

export async function getChuckNorrisJoke(): Promise<Joke> {
  const data = await apiClient<{id: string, value: string}>(jokeEndpoints.chuckNorris);
  
  return { 
    id: data.id, 
    joke: data.value 
  };
}

export async function getRandomJoke(): Promise<Joke> {
  const random = Math.random();
  if (random < 0.5) {
    return getDadJoke();
  } else {
    return getChuckNorrisJoke();
  }
}

export function scoreJoke(joke: string, score: number): JokeReport[] {
  const report: JokeReport = {
    joke,
    score,
    date: new Date().toISOString(),
  };
  
  reportAcudits.push(report);
  console.log('Nuevo registro en reportAcudits:', report);
  console.log('Array completo reportAcudits:', reportAcudits);
  
  return [...reportAcudits]; 
}

