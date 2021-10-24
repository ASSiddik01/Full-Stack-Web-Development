const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());


const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01788888888' },
    { id: 1, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Soniya', email: 'Soniya@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Susmita', email: 'Susmita@gmail.com', phone: '01788888888' },
]




app.get('/', (req, res) => {
    res.send('hello Shama, welcome to USA');
})

//  Queary Perameters
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchReasult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchReasult);
    } else {
        res.send(users);
    }
})

// app.Method
app.post('/user', (req, res) => {
    console.log('hitting');
    res.send('hitted')
})


// Dymanic API
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log("Post is", port);
})