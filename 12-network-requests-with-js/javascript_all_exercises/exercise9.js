// Exercise 9: Use the Content-Type header to specify the data format in a Fetch request
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: 'Hello, world!' })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
