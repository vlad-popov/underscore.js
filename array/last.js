function last(arr, n) {
    // todo: slice
    if (n === undefined || n === 1) {
        return arr[arr.length - 1];
    }

    var newArr = [];
    for (var i = (arr.length) - n; i < arr.length; i++) {
        newArr.push(arr[i]);
    }

    return newArr
}


module.exports = last;