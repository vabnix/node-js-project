const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.sendFile('./views/index.html', { root: __dirname});
});

app.get('/about', function (req, res) {
  res.sendFile('./views/about.html', { root: __dirname});
});

app.get('/aum', function (req, res) {
  res.sendFile('./views/aum.html', { root: __dirname});
});

app.get('/ishaan', function (req, res) {
  res.sendFile('./views/ishaan.html', { root: __dirname});
});

app.use((req, res) => {
  res.sendFile('./views/404.html', { root: __dirname});
});

app.listen(3000)