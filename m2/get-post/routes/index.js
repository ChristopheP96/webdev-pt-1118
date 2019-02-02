var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get(('/form'), (req, res) => {
  res.render('form');
});

module.exports = router;
