import { resetRatingUI } from '../components/jokeUI';
describe('resetRatingUI', () => {
    beforeEach(() => {
        document.body.innerHTML = `
      <div id="ratingButtons">
        <button class="btn-selected"></button>
        <button class="btn-selected"></button>
      </div>
    `;
    });
    it('elimina la clase btn-selected de todos los botones', () => {
        resetRatingUI();
        const buttons = document.querySelectorAll('#ratingButtons button');
        buttons.forEach(btn => {
            expect(btn.classList.contains('btn-selected')).toBe(false);
        });
    });
});
