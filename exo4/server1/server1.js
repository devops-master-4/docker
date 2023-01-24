
const express = require('express');
const axios = require('axios');
const app = express();

app.get('/ping', (req, res) => {
  axios.post('http://localhost:3000/message', {
    destination: 'http://localhost:3001/pong',
    message: 'ping'
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  res.send('ping sent');
});

app.listen(3001, () => {
  console.log('Server 1 listening on port 3000');
});
