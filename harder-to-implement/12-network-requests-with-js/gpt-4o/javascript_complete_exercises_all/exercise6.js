// Exercise 6: Check the status code of a Fetch response and log a message if it's not 200
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (response.status !== 200) {
            console.error('Error: Status code', response.status);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
