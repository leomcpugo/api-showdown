var request = require('request-promise');
var conf = require('../configuration/config')();

// Returns the user list from the service
async function getPolicyList() {

    // Connection properties
    var options = {
        method: 'GET',
        uri: conf.API_PATH + `580891a4100000e8242b75c5`,
        json: true
    };

    return (await request(options)).policies;
}

// filtered list
exports.getPolicyList = async function (filterParameters = null) {
    var policyList = await getPolicyList();

    // filter the list if the filterParameters exists
    if (filterParameters) {
        policyList = policyList
            .filter(element => {
                if (filterParameters.hasOwnProperty('id') && element.id != filterParameters.id) {
                    return false;
                }
                if (filterParameters.hasOwnProperty('clientId') && element.clientId != filterParameters.clientId) {
                    return false;
                }

                return true;
            });
    }

    return policyList;
}