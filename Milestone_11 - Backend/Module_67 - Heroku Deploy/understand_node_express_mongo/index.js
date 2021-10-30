// const os = require('os');

// console.log('OS Version',os.version())
// console.log('OS BIT',os.arch())


// console.log('Running Node')

// Video -2:
// ---------------

const express = require('express')
const app = express()
const port = 7000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})