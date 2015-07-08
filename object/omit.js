function omit(obj) {
    var newObj = {};

    for (var key in obj) {
        for (var i = 1; i < arguments.length; i++) {
            if (key !== arguments[i]) {
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}

module.exports = omit;