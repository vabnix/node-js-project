const express = require('express')

//registering express engine
const app = express();

//register view engine
app.set('view engine', 'ejs');

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