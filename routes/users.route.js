var express = require('express');
var router = express.Router();

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
router.get('/:id', async function (req, res, next) {
    res
        .contentType('application/json')
        .status(200)
        .json({
            data: {
                client: await UsersService.findUser(req.params)
            }
        });
});

/* GET user policies by id. */
router.get('/:id/policies', async function (req, res, next) {

    let response = await PoliciesService.getPolicies();

    var policies = Array.from(response)
        .filter(element => {
            return element.clientId == req.params.id;
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
