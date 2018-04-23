var express = require('express');
var router = express.Router();

router.use('/authenticate', require('./authenticate.route'));
router.use('/users', require('./users.route'));

module.exports = router;
