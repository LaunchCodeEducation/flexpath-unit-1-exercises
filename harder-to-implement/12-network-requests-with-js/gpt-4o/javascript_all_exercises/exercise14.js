// Exercise 14: Create a Fetch request that sends data with URL parameters
const params = new URLSearchParams({ userId: 1, postId: 42 });
fetch(`https://jsonplaceholder.typicode.com/comments?${params.toString()}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
