import { fetchRandomJoke } from '../api/jokeAPI';

describe('fetchRandomJoke', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('devuelve chiste de icanhazdadjoke', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({ joke: 'Dad joke' }),
    });
    Math.random = () => 0.6; // para forzar la ruta icanhazdadjoke

    const joke = await fetchRandomJoke();
    expect(joke).toBe('Dad joke');
  });

  it('devuelve chiste de chucknorris.io', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({ value: 'Chuck Norris joke' }),
    });
    Math.random = () => 0.4; // forzar la otra ruta

    const joke = await fetchRandomJoke();
    expect(joke).toBe('Chuck Norris joke');
  });

  it('maneja error y devuelve mensaje de error', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    const joke = await fetchRandomJoke();
    expect(joke).toBe('Error loading random joke, sorry');
  });
});
