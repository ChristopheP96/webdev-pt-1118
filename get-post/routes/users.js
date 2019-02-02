var express = require('express');
var router = express.Router();

// get /users
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

// query
// get /users/search
// get /users/search?q='hola'
// get /users/search?q='hola'&limit=2
router.get('/search', (req, res, next) => {
  const { q, limit, offset } = req.query;
  return res.send(`mi query es ${q} ${limit} ${offset}`);
});

// get users/1
// get users/2
// get users/432
// get users/9876
// get users/ironhack/courses
// get users/codeworks/courses
router.get('/:id', (req, res) => {
  const { id } = req.params;
  return res.send(`my param es: ${id}`);
});

router.post('/search', (req, res) => {
  const { name, lastname } = req.body;
  res.send(`mis datos son ${name} ${lastname}`);
});

module.exports = router;
