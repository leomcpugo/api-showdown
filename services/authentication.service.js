var jwt = require('jsonwebtoken');
var conf = require('../configuration/config')();

// Signs the Token
exports.signToken = function (id, role) {

    // create payload for token
    const payload = {
        id,
        role
    };

    // return the signed token
    return jwt.sign(payload, conf.SECRET, {
        expiresIn: (conf.TOKEN_EXPIRATION_TIME * 60 * 60) // expires in N hours
    });
}

// Reads the Token
exports.decodeToken = function (token) {
    return jwt.decode(token);
}

// validation for role for the user on the request
exports.verifyAdmin = function (req, res, next) {
    // if no role admin, return error
    if (req.user.role != 'admin') {
        return res
            .status(403)
            .json({ success: false, message: 'Permission denied' });
    }

    // continue the request
    next();
}