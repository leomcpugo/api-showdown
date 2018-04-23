module.exports = function () {
    switch (process.env.NODE_ENV) {
        default:
            {
                return {
                    SECRET: 'SHH_DONT_TELL',
                    API_PATH: "http://www.mocky.io/v2/",
                };
            }
    }
};