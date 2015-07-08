function first(arr, n) {
    if (n === undefined || n === 1) {
        return arr[0];
    }

    // todo: slice
    var newArr = [];
    for (var i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }

    return newArr
}


module.exports = first;