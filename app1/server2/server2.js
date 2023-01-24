
const express = require('express');
const axios = require('axios');
const app = express();

app.get('/pong', (req, res) => {
  setTimeout(() => {
    axios.get('http://localhost:3000/ping')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, 500);
  res.send('pong');
});

app.listen(3001, () => {
  console.log('Server 2 listening on port 3001');
});
