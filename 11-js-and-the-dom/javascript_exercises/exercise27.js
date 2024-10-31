// Exercise 27: Use appendChild to add new items to a list dynamically
document.getElementById('addButton').addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = 'New List Item';
    document.getElementById('myList').appendChild(newItem);
});
