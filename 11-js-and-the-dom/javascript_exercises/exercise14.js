// Exercise 14: Use stopPropagation to prevent event bubbling
document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent clicked!');
});
document.getElementById('child').addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Child clicked, event propagation stopped!');
});
