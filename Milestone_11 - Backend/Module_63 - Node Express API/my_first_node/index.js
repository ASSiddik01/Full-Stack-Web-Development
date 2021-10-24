const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello Shama, welcome to USA');
})

app.listen(port, () => {
    console.log("Post is", port);
})