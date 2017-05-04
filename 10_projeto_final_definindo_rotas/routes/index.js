var express = require('express');
var router = express.Router();
var service = require('./../services/index');

/* GET home page. */
router.get('/', service.index);

module.exports = router;
