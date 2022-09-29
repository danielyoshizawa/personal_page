var express = require('express');
var router = express.Router();

router.all('*', (req, res) => {
    res.status(404).render('pages/error/404', { layout: 'main' });
});

module.exports = router;
