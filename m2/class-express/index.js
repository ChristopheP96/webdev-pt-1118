const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.set('layout', 'layouts/main');

app.use(expressLayouts);

app.use(express.static('public'));

app.use((req, res, next) => {
  console.log('middleware 🤪');
  next();
});

app.get('/', (req, res) => {
  const user = 'Super';
  const lastName = 'Lopez';
  const isAdmin = false;
  const arr = ['bcn', 'madrid'];
  res.render('index', { user, isAdmin, arr });
  // res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/landing', (req, res) => {
  console.log('una linea \\n otra linea');
  res.render('home', { layout: 'layouts/landing' });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
