function some(arr, predicate) {
    for (var i = 0; i < arr.length; i++) {
        if (predicate === arr[i]) {
            return true
        }
    }
    return false
}

module.exports = some;