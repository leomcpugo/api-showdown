module.exports = function () {
    // returns the configuration for the environment
    switch (process.env.NODE_ENV) {
        case 'production':
            return {
                SECRET: 'PRODUCTION_SHH_DONT_TELL',
                TOKEN_EXPIRATION_TIME: 24,
                API_PATH: "http://www.mocky.io/v2/",
            }
        default:
            return {
                SECRET: 'SHH_DONT_TELL',
                TOKEN_EXPIRATION_TIME: 24,
                API_PATH: "http://www.mocky.io/v2/",
            };
    }
};