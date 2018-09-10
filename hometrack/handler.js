/*** @copyright Wang Zhou 2018. All Rights Reserved.*/
'use strict';

// import the needed sub functions
let filter = require('./functions/filter');

let validator = require('./utils/validator');

module.exports.main = (event, context, callback) => {
    let query = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        auth: false, // exercise no need auth
        param: event.queryString,
        method: event.httpMethod,
        statusCode: 200,
    };

    if (query.method === 'POST') {
        if (!validator.jsonFormat(query, event.body)) {
            query.message = 'Could not decode request: JSON parsing failed';
            query.statusCode = 400;

            callback(null, defaultError(query));
        }

        filter(query, event.body,callback);

        return;
    }

    callback(null, defaultError(query));
};

/**
 * error message handler
 * @param {object} query
 * @return {object} object
 */
function defaultError(query) {
    return {
        headers: query.headers,
        statusCode: query.statusCode || 501,
        body: JSON.stringify({ error: query.message || 'url format error' }),
    };
}
