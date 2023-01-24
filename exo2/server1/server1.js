const express = require('express');
const axios = require('axios');
const app = express();
const server2Address = "localhost:3001";

axios.get('http://localhost:3000/register/server1/localhost:3000')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

app.get('/ping', (req, res) => {
  setTimeout(() => {
    axios.get(`http://${server2Address}/pong`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, 500);
  res.send('ping');
});

app.listen(3002, () => {
  console.log('Server 1 listening on port 3002');
});
