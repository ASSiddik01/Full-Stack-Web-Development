const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config()


// Middleware
app.use(cors());
app.use(express.json());

// Data url
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i5p5a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db("emaJhonUser");
        const productCollection = database.collection("products");

        // GET API
        app.get('/products', async (req, res) => {
            const cursor = productCollection.find({});
            const products = await cursor.toArray();
            const count = await cursor.count();
            res.send({
                count,
                products
            });
        })


    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);






app.get('/', (req, res) => {
    res.send('Ema Jhon Server')
});

app.listen(port, () => {
    console.log('Ema Jhon server port : ', port);
})