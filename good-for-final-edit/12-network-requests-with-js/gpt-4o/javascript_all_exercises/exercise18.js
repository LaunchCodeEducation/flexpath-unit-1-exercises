// Exercise 18: Use the Fetch API to get data and display it in HTML
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const userList = document.createElement('ul');
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        document.body.appendChild(userList);
    })
    .catch(error => console.error('Error:', error));
