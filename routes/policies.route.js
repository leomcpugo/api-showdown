var express = require('express');
var router = express.Router();

var UsersService = require('../services/users.service');
var PoliciesService = require('../services/policies.service');

/* GET users listing. */
router.get('/user/:userId', async function (req, res, next) {

    let response = await PoliciesService.getPolicies();

    var policies = Array.from(response)
        .filter(element => {
            return element.clientId == req.params.userId;
        });

    res
        .contentType('application/json')
        .status(200)
        .json({
            data: {
                policies
            }
        });
});