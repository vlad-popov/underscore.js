var reduce = require('./../collection/reduce.js');

function object(arr, values) {
    var newObj = {};
    return reduce(arr, function (memo, num) {
        newObj[num] = values;
        return newObj;
    }, newObj);
}

module.exports = object;
