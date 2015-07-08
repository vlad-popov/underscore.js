var filter = require('./../collection/filter.js');

function without(arr, values) {
    return filter(arr, function (el) {
        return el !== values;
    });
}


module.exports = without;