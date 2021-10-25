const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 5000;


const uri = "mongodb+srv://Shama:8BallPull@cluster0.i5p5a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
    console.log('Mongo DB');
    const user = { name: "Siddik", email: "siddik@gmail.com", phone: "0199999999999" };
    collection.insertOne(user)
    .then(() => {
        console.log('Data Send');
    })


//   client.close();
});

app.get('/', (req, res) => {
    res.send('Running my CRUD Server');
})

app.listen(port, () => {
    console.log('Running Port is', port);
})