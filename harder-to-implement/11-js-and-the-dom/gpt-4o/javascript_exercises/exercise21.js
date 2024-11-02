// Exercise 21: Use querySelectorAll to select all list items and change their font size
const listItems = document.querySelectorAll('li');
listItems.forEach(item => {
    item.style.fontSize = '18px';
});
