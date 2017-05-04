var express = require('express');
var router = express.Router();
var Person = require('./../models/Person');

router.get('/', function(req, res) {
    res.send('Hello');
});

module.exports = router;