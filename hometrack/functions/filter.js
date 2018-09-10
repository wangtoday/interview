/*** @copyright Wang Zhou 2018. All Rights Reserved.*/
module.exports = (query, body, callback) => {
    callback(null, {
        headers: query.headers,
        statusCode: query.statusCode,
        body: JSON.stringify({ response: 'set up' }),
    });
};
