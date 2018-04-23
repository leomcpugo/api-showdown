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

exports.getUsers = async function (filterParameters = null) {
    var userList = await getUserList();

    if (filterParameters) {
        userList = userList
            .filter(element => {
                for (var propertyName in filterParameters) {
                    if (element[propertyName] != filterParameters[propertyName]) {
                        return false;
                    }
                    return true
                }
            });
    }

    return userList;
}

exports.findUser = async function (id) {
    var userList = await getUserList();
    return userList
        .find(element => {
            return element.id == id;
        });
}