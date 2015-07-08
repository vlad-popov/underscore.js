var filter = require('./../collection/filter.js');

function compact(arr) {
    return filter(arr, function (el) {
        return Boolean(el);
    })
}

module.exports = compact;