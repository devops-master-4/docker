
const express = require('express');
const axios = require('axios');
const app = express();

app.post('/pong', (req, res) => {
  console.log(req.body);
  res.send('pong');
});

app.listen(3002, () => {
  console.log('Server 2 listening on port 3001');
});
