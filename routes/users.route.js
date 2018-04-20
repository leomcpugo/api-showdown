var express = require('express');
var router = express.Router();
var request = require('request-promise');

var UsersService = require('../services/users.service');
var PoliciesService = require('../services/policies.service');

/* GET users listing. */
router.get('/', async function (req, res, next) {
    res
        .contentType('application/json')
        .status(200)
        .json({
            data: {
                clients: await UsersService.getUsers()
            }
        });
});

/* GET user by id. */
router.get('/:userId', async function (req, res, next) {

    let response = await UsersService.getUsers();

    var client = Array.from(response)
        .find(element => {
            return element.id == req.params.userId;
        });

    res
        .contentType('application/json')
        .status(200)
        .json({
            data: {
                client
            }
        });
});

/* GET user policies by id. */
router.get('/:userId/policies', async function (req, res, next) {

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

module.exports = router;
