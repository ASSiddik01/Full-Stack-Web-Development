// const os = require('os');

// console.log('OS Version',os.version())
// console.log('OS BIT',os.arch())


// console.log('Running Node')

// Video -2:
// ---------------

const express = require('express')
const { MongoClient } = require('mongodb');
require('dotenv').config()


const app = express()
const port = 5000;


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i5p5a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log('DB Connected')
    }
    finally {
        // await client.close()
    }
}
run().catch(console.dir);




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})