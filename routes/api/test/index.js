var express = require('express');
var router = express.Router();

console.log('trace: /api/test/index.js');
router.use('/test1', require('./test1'));
router.use('/test2', require('./test2'));

module.exports = router;