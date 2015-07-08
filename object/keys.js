function keys(obj) {
    var newArr = [];
    for (var key in obj) {
        newArr.push(key);
    }
    return newArr;
}

module.exports = keys;