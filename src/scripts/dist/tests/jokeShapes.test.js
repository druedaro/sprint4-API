import { changeJokeShape } from '../components/jokeShapes';
describe('changeJokeShape', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div class="custom-background shape-1"></div>';
    });
    it('change the class randomly', () => {
        const div = document.querySelector('.custom-background');
        const oldClass = Array.from(div.classList).find(cls => cls.startsWith('shape-'));
        changeJokeShape();
        const newClass = Array.from(div.classList).find(cls => cls.startsWith('shape-'));
        expect(newClass).not.toBe(oldClass);
    });
});
