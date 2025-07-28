"use strict"

import { apiClient } from '../api-service/apiClient';
import { jokeEndpoints } from '../config/endpoints';

export interface Joke {
  id: string;
  joke: string;
}

export async function getDadJoke(): Promise<Joke> {
  const url = jokeEndpoints.dadJokes;
  const response = await fetch(url, {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    throw new Error('Error al obtener chiste dad joke');
  }
  const data = await response.json();
  return { id: data.id, joke: data.joke };
}

export async function getChuckNorrisJoke(): Promise<Joke> {
  const url = jokeEndpoints.chuckNorris;
  return apiClient<Joke>(url);
}

export async function getRandomJoke(): Promise<Joke> {
  const random = Math.random();
  if (random < 0.5) {
    return getDadJoke();
  } else {
    return getChuckNorrisJoke();
  }
}

export function scoreJoke(joke: string, score: number) {
  const report = {
    joke,
    score,
    date: new Date().toISOString(),
  };
  console.log('Nuevo registro en reportAcudits:', report);
}
