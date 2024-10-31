// Exercise 24: Implement a simple image carousel using the DOM
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
document.getElementById('next').addEventListener('click', () => {
    images[currentIndex].classList.remove('visible');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('visible');
});
document.getElementById('prev').addEventListener('click', () => {
    images[currentIndex].classList.remove('visible');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].classList.add('visible');
});
