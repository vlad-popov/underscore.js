var reduce = require('./reduce.js');

function max(arr, key) {
    return reduce(arr, function (max, num) {
        if (max[key] < num[key]) {
            max = num;
        }
        return max;
    }, arr[0]);
}



module.exports = max;