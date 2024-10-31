// Exercise 13: Implement a function that retries a failed Fetch request up to 3 times
async function fetchWithRetry(url, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url);
            if (response.ok) return await response.json();
        } catch (error) {
            if (i === retries - 1) throw error;
        }
    }
}
fetchWithRetry('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
