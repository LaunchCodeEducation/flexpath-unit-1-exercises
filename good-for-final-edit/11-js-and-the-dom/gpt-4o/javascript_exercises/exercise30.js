// Exercise 30: Use remove to delete an element from the DOM when a button is clicked
document.getElementById('deleteButton').addEventListener('click', () => {
    document.getElementById('elementToDelete').remove();
});
