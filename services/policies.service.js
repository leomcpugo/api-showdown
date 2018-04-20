var request = require('request-promise');

exports.getPolicies = async function () {

    var options = {
        method: 'GET',
        uri: `http://www.mocky.io/v2/580891a4100000e8242b75c5`,
        json: true // Automatically stringifies the body to JSON
    };

    let response = await request(options);
    return response.policies;
}