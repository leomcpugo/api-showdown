var express = require('express');
var router = express.Router();

var UsersService = require('../services/users.service');
var PoliciesService = require('../services/policies.service');

/* GET Policy by id. */
router.get('/:id', async function (req, res, next) {

    // filter the policies by id
    let policyList = await PoliciesService.getPolicyList({ id: req.params.id });

    if (policyList.length != 1) {
        return next({ status: 404, message: 'Element not found' });
    }

    res
        .contentType('application/json')
        .status(200)
        .json({
            data: {
                policy: policyList[0]
            }
        });
});

// Get the policy list by user name 
// (shouldn't it be by user ID ???)
router.get('/user/:name', async function (req, res, next) {

    // Get the user
    let userList = await UsersService.getUsers({ name: req.params.name });

    if (userList.length != 1) {
        return next({ status: 404, message: 'Element not found' });
    }

    // Get the user policies
    let policyList = await PoliciesService.getPolicyList({ clientId: userList[0].id });

    res
        .contentType('application/json')
        .status(200)
        .json({
            data: {
                policyList
            }
        });
});

module.exports = router;
