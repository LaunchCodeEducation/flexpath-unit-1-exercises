// Exercise 22: Create a dynamic list where items can be added and removed
document.getElementById('addItem').addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    document.getElementById('itemList').appendChild(newItem);
});

document.getElementById('removeItem').addEventListener('click', () => {
    const itemList = document.getElementById('itemList');
    if (itemList.lastChild) {
        itemList.removeChild(itemList.lastChild);
    }
});
