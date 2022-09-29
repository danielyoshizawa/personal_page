var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('pages/code_challenges/code_challenges', { layout: 'main' });
});

module.exports = router;
