var express = require('express');
var router = express.Router();

var UsersService = require('../services/users.service');
var AuthenticationService = require('../services/authentication.service');

router.post('/log-in', async function (req, res, next) {

    // user retrieval
    var userList = await UsersService.getUsers({ id: req.body.id });

    // If the user doesn't exist return error
    if (userList.length != 1) {
        res
            .status(401)
            .json({ success: false, message: 'Authentication failed.' });
    } else {
        // get the user
        const user = userList[0];
        // create token
        const token = AuthenticationService.signToken(user.id, user.role);
        res
            .status(200)
            .json({
                success: true,
                message: 'Token generated',
                token
            });
    }
});

module.exports = router;
