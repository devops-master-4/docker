const express = require('express');
const axios = require('axios');
const app = express();

var server1Address;
var server2Address;

app.get('/register/:serverId/:address', (req, res) => {
  if (req.params.serverId === 'server1') {
    server1Address = req.params.address;
  } else if (req.params.serverId === 'server2') {
    server2Address = req.params.address;
  }
  res.send('Registration successful');
});

app.listen(3003, () => {
  console.log('Server 3 listening on port 3003');
});
