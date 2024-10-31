// Exercise 12: Use fetch to send data to an API and handle the response
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
