var indexOf = require('./../array/indexOf.js');

function difference(arr, others) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (indexOf(others, arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


module.exports = difference;


