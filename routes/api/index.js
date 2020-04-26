var express = require('express');
var router = express.Router();

console.log('trace: /api/index.js');
router.use('/test', require('./test'));

module.exports = router;