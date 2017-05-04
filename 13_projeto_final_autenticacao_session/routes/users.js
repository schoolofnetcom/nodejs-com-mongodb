var express = require('express');
var router = express.Router();
var service = require('./../services/users');

router.get('/login', service.login);
router.get('/register', service.register);
router.post('/signin', service.signin);
router.post('/create', service.create);

module.exports = router;
