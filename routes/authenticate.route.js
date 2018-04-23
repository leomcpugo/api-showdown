var express = require('express');
var router = express.Router();

var UsersService = require('../services/users.service');
var conf = require('../configuration/config')();
var jwt = require('jsonwebtoken');

router.post('/log-in', async function (req, res, next) {

    // user retrieval
    var user = await UsersService.findUser(req.body.id);

    // If the user doesn't exist
    if (!user) {
        res.json({ success: false, message: 'Authentication failed.' });
    } else {

        const payload = {
            id: user.id,
            role: user.role
        };

        var token = jwt.sign(payload, conf.SECRET, {
            expiresIn: (24 * 60 * 60) // expires in 24 hours
        });

        res.json({
            success: true,
            message: 'Token generated',
            token
        });
    }
});

module.exports = router;
