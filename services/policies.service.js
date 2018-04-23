var request = require('request-promise');
var conf = require('../configuration/config')();

var options = {
    method: 'GET',
    uri: conf.API_PATH + `580891a4100000e8242b75c5`,
    json: true // Automatically stringifies the body to JSON
};

exports.getPolicies = async function () {
    return (await request(options)).policies;
}