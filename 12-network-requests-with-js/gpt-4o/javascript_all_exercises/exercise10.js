// Exercise 10: Implement content negotiation using the Accept header
fetch('https://jsonplaceholder.typicode.com/posts', {
    headers: {
        'Accept': 'application/json'
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
