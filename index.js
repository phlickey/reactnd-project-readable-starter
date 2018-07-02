require('./api-server/server');
let path = require('path');
const express = require('express')
const app = express()
app.use('/static', express.static(path.join(__dirname + '/readable-client/build/static')))
app.get('/*',(req, res) => {
  res.sendFile(path.join(__dirname + '/readable-client/build/index.html'))
})
app.listen(3000, () => console.log('Readable client is available on port 3000!'))