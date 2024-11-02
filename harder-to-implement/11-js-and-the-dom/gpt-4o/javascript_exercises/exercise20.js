// Exercise 20: Implement dragstart and drop events to enable drag-and-drop
const draggable = document.getElementById('draggable');
const dropZone = document.getElementById('dropZone');

draggable.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text');
    const draggedElement = document.getElementById(id);
    dropZone.appendChild(draggedElement);
});
