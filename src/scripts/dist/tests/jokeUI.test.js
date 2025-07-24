import { showJoke, resetRatingUI } from '../components/jokeUI';
import { setSelectedScore, ratingButtons } from '../components/jokeRating';
jest.mock('../components/jokeRating', () => {
    const buttons = [
        { classList: { remove: jest.fn(), contains: jest.fn(), add: jest.fn() } },
        { classList: { remove: jest.fn(), contains: jest.fn(), add: jest.fn() } },
    ];
    return {
        ratingButtons: buttons,
        setSelectedScore: jest.fn(),
    };
});
describe('showJoke', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="jokeDiv"></div>';
    });
    test('show the joke in the div', () => {
        showJoke('A funny joke');
        const jokeDiv = document.getElementById('jokeDiv');
        expect(jokeDiv.textContent).toBe('A funny joke');
    });
});
describe('resetRatingUI', () => {
    test('remove the btn-selected class from all buttons and reset the score.', () => {
        resetRatingUI();
        ratingButtons.forEach(btn => {
            expect(btn.classList.remove).toHaveBeenCalledWith('btn-selected');
        });
        expect(setSelectedScore).toHaveBeenCalledWith(null);
    });
});
