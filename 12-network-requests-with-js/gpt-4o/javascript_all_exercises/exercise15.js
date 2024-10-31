// Exercise 15: Use Fetch to get binary data like an image and display it
fetch('https://via.placeholder.com/150')
    .then(response => response.blob())
    .then(blob => {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
        document.body.appendChild(img);
    })
    .catch(error => console.error('Error:', error));
