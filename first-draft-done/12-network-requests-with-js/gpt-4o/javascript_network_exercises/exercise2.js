// Exercise 2: Parse a JSON response from a Fetch request and log it to the console
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => console.log(users))
    .catch(error => console.error('Error:', error));
