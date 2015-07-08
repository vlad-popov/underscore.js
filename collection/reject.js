var filter = require('./../collection/filter.js');

function reject(arr, callback) {
    return filter(arr, function (el) {
        return callback(el) !== true;
    });
}


module.exports = reject;