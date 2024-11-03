// Exercise 3: Set custom headers for a Fetch request
fetch('https://jsonplaceholder.typicode.com/posts', {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token123'
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
