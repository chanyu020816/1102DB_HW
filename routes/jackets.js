var express = require('express');
const shop_12 = require('../models/shop_12');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    let results = await shop_12.fetchAll();
    console.log('results', JSON.stringify(results));
    res.render('crown2_12/jackets', { 
      data: result});
  }catch(err){
    console.log('error', err)
  }
    
  });

module.exports = router;
