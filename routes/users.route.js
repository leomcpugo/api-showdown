var express = require('express');
var router = express.Router();

var UsersService = require('../services/users.service');
var PoliciesService = require('../services/policies.service');
var AuthenticationService = require('../services/authentication.service');

/* GET users listing. */
router.get('/', async function (req, res, next) {

    const userList = await UsersService.getUsers(req.query);

    res
        .contentType('application/json')
        .status(200)
        .json({
            data: {
                userList
            }
        });
});

module.exports = router;
