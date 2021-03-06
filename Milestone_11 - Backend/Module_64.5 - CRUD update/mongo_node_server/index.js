const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://Shama:8BallPull@cluster0.i5p5a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
    try {
      await client.connect();
      const database = client.db("mydata");
      const usersCollection = database.collection("alluser");

      // Get api
      app.get('/users', async (req, res) => {
        const cursor = usersCollection.find({});
        const users = await cursor.toArray();
        res.send(users);
      })

      // Update api
      app.get('/users/:id', async (req, res) => {
        const id = req.params.id;
        const query = { _id: ObjectId(id) };
        const user = await usersCollection.findOne(query);

        console.log('load user with id', id);
        res.send(user);
      })
      
      // Post api
      app.post('/users', async (req, res) => {
        const newUser = req.body;
        const result = await usersCollection.insertOne(newUser);
        console.log('Hitting the post',req.body);
        res.json(result);
      })

      // Update on Database
      app.put('/users/:id', async (req, res) => {
        const id = req.params.id;
        const updatedUser = req.body;
        const filter = { _id: ObjectId(id) };
        const options = { upsert: true };

        const updateDoc = {
          $set: {
            name: updatedUser.name,
            email: updatedUser.email
          },
        };

        const result = await usersCollection.updateOne(filter, updateDoc, options);

        console.log('User id is', id);
        res.json(result);
      })

      // Delete api
      app.delete('/users/:id', async (req, res) => {
        const id = req.params.id;
        const query = { _id: ObjectId(id) };
        const result = await usersCollection.deleteOne(query);
        console.log('deleting user with id', result);
        res.json(result);
      })
        
        

    } finally {
      // await client.close();
    }
  }
  run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running my CRUD Server');
})

app.listen(port, () => {
    console.log('Running Port is', port);
})