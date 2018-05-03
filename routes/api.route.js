var express = require('express');
var router = express.Router();
var AuthenticationService = require('../services/authentication.service');

// no authentication needed
router.use('/authenticate', require('./authenticate.route'));

// authentication needed
router.use(function (req, res, next) {
    // read the token in the headers
    var token = req.headers['x-access-token'];

    // if no token provided return error 
    if (!token) {
        return res
            .status(401)
            .send({ auth: false, message: 'No token provided.' });
    }

    // decode the token and store it in the request
    try {
        req.user = AuthenticationService.decodeToken(token);
    } catch (err) {
        return res
            .status(401)
            .send({ auth: false, message: 'Invalid token provided.' });
    }

    // continue the request process
    next();
});

router.use('/users', require('./users.route'));
router.use('/policies', require('./policies.route'));

module.exports = router;
