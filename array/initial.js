var clone = require('./clone.js');


// todo: slice
function initial(arr, n) {
    if (n === undefined || n === 1) {
        return clone(arr).splice(0, arr.length - 1);
    } else {
        var newArr = [];
        for (var i = 0; i < arr.length - n; i++) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}


module.exports = initial;