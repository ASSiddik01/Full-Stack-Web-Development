const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Ema Jhon Server')
});

app.listen(port, () => {
    console.log('Ema Jhon server port : ', port);
})