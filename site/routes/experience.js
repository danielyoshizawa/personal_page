var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('pages/experience/experience', { layout: 'main' });
});

module.exports = router;
