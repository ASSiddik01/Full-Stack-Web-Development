const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 5000;


const uri = "mongodb+srv://Shama:8BallPull@cluster0.i5p5a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
    try {
      await client.connect();
      const database = client.db("mydata");
      const haiku = database.collection("alluser");
      
      // Post api
      app.post('/users', async (req, res) => {
        console.log('Hitting the post');
        res.send('hit the post');
      })
        
        

    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running my CRUD Server');
})

app.listen(port, () => {
    console.log('Running Port is', port);
})