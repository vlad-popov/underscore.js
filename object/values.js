function values(obj) {
    var newArr = [];
    for (var key in obj) {
        newArr.push(obj[key]);
    }
    return newArr;
}

module.exports = values;