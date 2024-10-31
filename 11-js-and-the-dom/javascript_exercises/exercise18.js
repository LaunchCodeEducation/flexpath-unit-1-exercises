// Exercise 18: Remove a class from an element on mouse leave
document.getElementById('hoverElement').addEventListener('mouseleave', () => {
    document.getElementById('hoverElement').classList.remove('hoveredClass');
});
