// Exercise 29: Implement a tooltip that appears when hovering over a button
const button = document.getElementById('tooltipButton');
const tooltip = document.getElementById('tooltip');

button.addEventListener('mouseover', () => {
    tooltip.style.display = 'block';
});

button.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
});
