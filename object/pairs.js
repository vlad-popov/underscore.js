function pairs(obj) {
    var newArr = [];
    for (var key in obj) {
        newArr.push([key, obj[key]]);
    }
    return newArr;
}


module.exports = pairs;