"use strict"

const ratingButtons = document.querySelectorAll<HTMLButtonElement>('#rating-buttons button');
let currentScore: number | null = null;

export function attachScoreListeners(onScoreChange: (score: number | null) => void) {
  ratingButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const score = Number(button.getAttribute('data-score'));
      if (currentScore === score) {
        currentScore = null; 
      } else {
        currentScore = score;
      }
      onScoreChange(currentScore);
      updateScoreUI(currentScore); 
    });
  });
}

export function updateScoreUI(selectedScore: number | null = null) {
  ratingButtons.forEach((button) => {
    const score = Number(button.getAttribute('data-score'));
    if (score === selectedScore) {
      button.classList.add('btn-selected');
    } else {
      button.classList.remove('btn-selected');
    }
  });
}
