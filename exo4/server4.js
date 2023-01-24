
const express = require('express');
const axios = require('axios');
const app = express();

app.post('/message', (req, res) => {
  axios.post(req.body.destination, req.body.message)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.listen(3000, () => {
  console.log('Server 4 listening on port 3000');
});
