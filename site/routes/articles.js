var express = require('express');
var articles = require('/home/daniel/Development/Personal_Page/site/public/content/articles/articles.json');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('pages/articles/articles', { layout: 'main' });
});

router.get('/articles', function(req, res, next) {
  res.json(articles);
});

module.exports = router;
