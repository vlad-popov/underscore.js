function find(arr, iterator) {
    for(var i = 0; i < arr.length; i++) {
        if (iterator(arr[i])) {
            return arr[i];
        }
    }
}


module.exports = find;