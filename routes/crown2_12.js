var express = require('express');
const Category_12 = require('../models/Category_12');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    let results = await Category_12.fetchAll();
    console.log('results', JSON.stringify(results));
    res.render('crown2_12/index', { 
      data: results,
      id: '409650412', 
      title: 'crown2_DB' });
  }catch(err){
    console.log('error', err)
  }
    
  });


module.exports = router;
