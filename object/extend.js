function extend(obj) {
    var newObj = {};
    for (var i = 0; i < arguments.length; i++) {
        for (key in arguments[i]) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

module.exports = extend;