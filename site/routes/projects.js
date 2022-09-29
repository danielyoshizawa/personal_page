var express = require('express');
var router = express.Router();

/* GET projects page. */
router.get('/', function(req, res, next) {
  res.render('pages/projects/projects', { layout: 'main' });
});

module.exports = router;
