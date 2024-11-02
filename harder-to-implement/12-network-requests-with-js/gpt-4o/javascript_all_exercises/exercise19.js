// Exercise 19: Implement a function to make multiple Fetch requests concurrently
Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts'),
    fetch('https://jsonplaceholder.typicode.com/comments')
])
.then(responses => Promise.all(responses.map(res => res.json())))
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
