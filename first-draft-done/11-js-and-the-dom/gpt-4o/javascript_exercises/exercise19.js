// Exercise 19: Create a function to handle form validation
function validateForm() {
    const input = document.getElementById('inputField').value;
    if (input === '') {
        alert('Input cannot be empty!');
        return false;
    }
    return true;
}
document.querySelector('form').onsubmit = validateForm;
