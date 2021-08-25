function data() {
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}

function users() {
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => display(data))
}

function photos() {
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => console.log(data))
}

function display(data) {
    const ul = document.getElementById('user_list');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name} || Email: ${user.email}`;
        ul.appendChild(li);
    }
}