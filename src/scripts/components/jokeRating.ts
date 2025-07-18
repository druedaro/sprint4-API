"use strict"

export const ratingButtons = document.querySelectorAll('#ratingButtons button');
export let selectedScore: number | null = null;

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
