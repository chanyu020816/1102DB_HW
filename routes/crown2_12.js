var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('crown2_12/index', { id: '409650412', name: 'chanyu' });
  });

module.exports = router;
