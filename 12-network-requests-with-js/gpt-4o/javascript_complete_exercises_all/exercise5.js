// Exercise 5: Handle a Fetch request error using try-catch
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/invalid-url');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
fetchData();
