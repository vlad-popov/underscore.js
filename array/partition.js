function partition(arr, predicate) {
    var fitEl = [],
        noFitEl = [];

    for (var i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) {
            fitEl.push(arr[i]);
        } else {
            noFitEl.push(arr[i])
        }
    }

    return [fitEl, noFitEl];
}

module.exports = partition;