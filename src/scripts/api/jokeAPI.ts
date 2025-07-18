"use strict"

export async function fetchRandomJoke(): Promise<string> {
  try {
    if (Math.round(Math.random())) {
      const res = await fetch('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } });
      return (await res.json()).joke;
    } else { 
      const res = await fetch('https://api.chucknorris.io/jokes/random');
      return (await res.json()).value;
    }
  } catch (error) {
    console.error('Error fetching joke:', error);
    return 'Error loading random joke, sorry';
  }
}
