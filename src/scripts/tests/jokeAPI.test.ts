import { fetchRandomJoke } from '../api/jokeAPI';

describe('fetchRandomJoke', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('fetch a joke from icanhazdadjoke', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({ joke: 'Dad joke' }),
    });
    Math.random = () => 0.6;

    const joke = await fetchRandomJoke();
    expect(joke).toBe('Dad joke');
  });

  it('fetch a joke from chucknorris.io', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({ value: 'Chuck Norris joke' }),
    });
    Math.random = () => 0.4;

    const joke = await fetchRandomJoke();
    expect(joke).toBe('Chuck Norris joke');
  });

  it('handles errors and returns an error message', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    const joke = await fetchRandomJoke();
    expect(joke).toBe('Error loading random joke, sorry');
  });
});
