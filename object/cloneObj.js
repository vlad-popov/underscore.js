function cloneObj(obj) {
    var clone = {};
    for (var key in obj) {
        clone[key] = obj[key];
    }
    return clone;
}





module.exports = cloneObj;