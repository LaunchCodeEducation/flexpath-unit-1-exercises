// Exercise 11: Prevent a form from submitting if a field is empty
document.querySelector('form').addEventListener('submit', (e) => {
    const inputField = document.getElementById('myInput');
    if (inputField.value === '') {
        e.preventDefault();
        alert('Field cannot be empty!');
    }
});
