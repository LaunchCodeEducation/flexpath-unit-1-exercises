// Exercise 16: Implement a preflight request scenario and log the headers
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'OPTIONS',
    headers: { 'Access-Control-Request-Method': 'POST' }
})
.then(response => console.log(response.headers))
.catch(error => console.error('Error:', error));
