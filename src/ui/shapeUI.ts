"use strict"

export function changeBackgroundShape() {
  const shapes = ['shape-1', 'shape-2', 'shape-3', 'shape-4', 'shape-5', 'shape-6'];
  const randomIndex = Math.floor(Math.random() * shapes.length);
  const selectedShape = shapes[randomIndex];

  const bgDiv = document.querySelector('.custom-background') as HTMLElement;
  if (!bgDiv) return;

  bgDiv.classList.forEach((cls) => {
    if (cls.startsWith('shape-')) {
      bgDiv.classList.remove(cls);
    }
  });

  bgDiv.classList.add(selectedShape);
}
