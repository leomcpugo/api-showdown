var request = require('request-promise');
var conf = require('../configuration/config')();

// Returns the user list from the service
async function getUserList() {

    // Connection properties
    var options = {
        method: 'GET',
        uri: conf.API_PATH + `5808862710000087232b75ac`,
        json: true
    };

    return (await request(options)).clients;
}

// filtered list
exports.getUsers = async function (filterParameters = null) {
    var userList = await getUserList();

    // filter the list if the filterParameters exists
    if (filterParameters) {
        userList = userList
            .filter(element => {
                if (filterParameters.hasOwnProperty('name') && element.name != filterParameters.name) {
                    return false;
                }
                if (filterParameters.hasOwnProperty('id') && element.id != filterParameters.id) {
                    return false;
                }

                return true;
            });
    }

    return userList;
}