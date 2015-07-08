function indexOf(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return i
        }
    }
    return -1;
}

module.exports = indexOf;