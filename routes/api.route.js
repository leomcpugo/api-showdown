var express = require('express');
var router = express.Router();

router.use('/users', require('./users.route'));

module.exports = router;
