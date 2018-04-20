var request = require('request-promise');

exports.getUsers = async function () {

    var options = {
        method: 'GET',
        uri: `http://www.mocky.io/v2/5808862710000087232b75ac`,
        json: true // Automatically stringifies the body to JSON
    };

    let response = await request(options);
    return response.clients;
}