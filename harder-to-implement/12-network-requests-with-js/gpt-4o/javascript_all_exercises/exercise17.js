// Exercise 17: Handle a 404 error from an API call gracefully
fetch('https://jsonplaceholder.typicode.com/nonexistent-endpoint')
    .then(response => {
        if (response.status === 404) {
            console.error('Error 404: Not Found');
        } else {
            return response.json();
        }
    })
    .catch(error => console.error('Error:', error));
