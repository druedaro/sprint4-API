"use strict";
const ratingButtons = document.querySelectorAll('#rating-buttons button');
let currentScore = null;
export function attachScoreListeners(onScoreChange) {
    ratingButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const score = Number(button.getAttribute('data-score'));
            if (currentScore === score) {
                currentScore = null;
            }
            else {
                currentScore = score;
            }
            onScoreChange(currentScore);
            updateScoreUI(currentScore);
        });
    });
}
export function updateScoreUI(selectedScore = null) {
    ratingButtons.forEach((button) => {
        const score = Number(button.getAttribute('data-score'));
        if (score === selectedScore) {
            button.classList.add('btn-selected');
        }
        else {
            button.classList.remove('btn-selected');
        }
    });
}
