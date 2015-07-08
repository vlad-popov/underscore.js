var reduce = require('./reduce.js');

function min(arr, key) {
    return reduce(arr, function (min, num) {
        if (min[key] > num[key]) {
            min = num;
        }
        return min
    }, arr[0]);
}

module.exports = min;