"use strict"

export const ratingButtons = document.querySelectorAll('#ratingButtons button');

export let selectedScore: number | null = null;

export function setSelectedScore(score: number | null): void {
  selectedScore = score;
}

export function getSelectedScore(): number | null {
  return selectedScore;
}


ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    const score = parseInt(button.getAttribute('data-score')!);
    if (selectedScore === score) {
      selectedScore = null;
      button.classList.remove('btn-selected');
    } else {
      ratingButtons.forEach(btn => btn.classList.remove('btn-selected'));
      selectedScore = score;
      button.classList.add('btn-selected');
    }
  });
});
