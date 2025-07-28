"use strict"

import { apiClient } from '../api-service/apiClient.js';
import { jokeEndpoints } from '../config/endpoints.js';

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
  try {
    const url = jokeEndpoints.chuckNorris;
    return await apiClient<Joke>(url);
  } catch (error) {
    console.error('Error al obtener chiste Chuck Norris:', error);
    return { id: 'error', joke: 'No se pudo cargar la broma, prueba otra vez.' };
  }
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
