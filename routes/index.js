var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.status(200).json({ title: 'index' });
});

module.exports = router;
