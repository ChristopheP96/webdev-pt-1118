const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static('public'));

app.use((req, res, next) => {
  console.log('middleware 🤪');
  next();
});

app.get('/', (req, res) => {
  // const user = 'Paco';
  // const isAdmin = false;
  // const arr = ['bcn', 'madrid'];
  // res.render('index', { user, isAdmin, arr });
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/home', (req, res) => {
  res.render('home');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
