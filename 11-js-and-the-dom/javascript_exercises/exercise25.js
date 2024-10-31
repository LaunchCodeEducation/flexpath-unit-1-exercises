// Exercise 25: Use preventDefault to stop a link from navigating to another page
document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Link click prevented!');
});
