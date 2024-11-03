// Exercise 1: Make a GET request to an API endpoint using the Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
