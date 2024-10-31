// Exercise 8: Toggle a class on an element when a button is clicked
document.getElementById('toggleButton').addEventListener('click', () => {
    document.querySelector('.myElement').classList.toggle('toggledClass');
});
