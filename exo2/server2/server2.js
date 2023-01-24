
const express = require('express');
const axios = require('axios');
const app = express();

const server1Address = "localhost:3002";

axios.get('http://localhost:3000/register/server2/localhost:3001')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

app.get('/pong', (_req, res) => {
  setTimeout(() => {
    axios.get(`http://${server1Address}/ping`)
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
