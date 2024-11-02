// Exercise 15: Change the innerHTML of a div when a button is clicked
document.getElementById('changeButton').addEventListener('click', () => {
    document.getElementById('myDiv').innerHTML = '<p>Content changed!</p>';
});
