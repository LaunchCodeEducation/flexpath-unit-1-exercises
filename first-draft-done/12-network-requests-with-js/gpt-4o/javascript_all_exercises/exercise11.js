// Exercise 11: Make a Fetch request and handle both client and server errors
fetch('https://jsonplaceholder.typicode.com/invalid-url')
    .then(response => {
        if (!response.ok) {
            throw new Error('Server error: ' + response.status);
        }
        return response.json();
    })
    .catch(error => console.error('Error:', error));
