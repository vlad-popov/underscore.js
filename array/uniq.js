function uniqElements(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function uniq(arr, isSort) {
    if (isSort === true) {
        return uniqElements(arr);
    } else {
        arr.sort(function(a,b){return a-b});
        return uniqElements(arr);
    }
}

module.exports = uniq;