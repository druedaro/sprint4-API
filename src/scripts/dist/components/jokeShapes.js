"use strict";
export function changeJokeShape() {
    const jokeContainer = document.querySelector('.custom-background');
    if (!jokeContainer)
        throw new Error('No existe el contenedor .custom-background en el DOM');
    const shapes = ['shape-1', 'shape-2', 'shape-3', 'shape-4', 'shape-5', 'shape-6'];
    const currentShape = shapes.find(shape => jokeContainer.classList.contains(shape));
    const availableShapes = shapes.filter(shape => shape !== currentShape);
    const newShape = availableShapes[Math.floor(Math.random() * availableShapes.length)];
    shapes.forEach(shape => jokeContainer.classList.remove(shape));
    jokeContainer.classList.add(newShape);
}
