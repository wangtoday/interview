/*** @copyright Wang Zhou 2018. All Rights Reserved.*/

let util = require('../utils/validator');

module.exports = (query, body, callback) => {
    let response = [];
    for (let index = 0; index < body.length; index++) {
        if (
            body[index].workflow === 'completed' &&
            body[index].type === 'htv'
        ) {
            response.push({
                contactaddress: util.formatAddress(body[index].address),
                type: 'htv',
                workflow: 'completed',
            });
        }
    }

    callback(null, {
        headers: query.headers,
        statusCode: query.statusCode,
        body: JSON.stringify({ response: response }),
    });
};
