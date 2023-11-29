// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'));
  });
