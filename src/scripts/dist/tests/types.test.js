import { JokeReport } from '../types/types';
describe('JokeReport', () => {
    it('create an instance correctly', () => {
        const joke = 'Why did the chicken cross the road?';
        const score = 5;
        const date = '2025-07-22T10:00:00Z';
        const report = new JokeReport(joke, score, date);
        expect(report.joke).toBe(joke);
        expect(report.score).toBe(score);
        expect(report.date).toBe(date);
    });
});
