const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())

app.get('/message', function (req, res) {
  res.send('This is a message from Express Server.');
});

app.listen(51201, function () {
  console.log('Example app listening on port 51201!');
});