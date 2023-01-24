const express = require('express');
const axios = require('axios');
const app = express();

app.get('/ping', (req, res) => {
  setTimeout(() => {
    axios.get('http://localhost:3001/pong')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, 500);
  res.send('ping');
});

app.listen(3000, () => {
  console.log('Server 1 listening on port 3000');
});

