function compose(func) {
    var length = arguments.length,
        arg = arguments,
        results;
    return function () {
        for (var i = 0; i < length; i++) {
            results = arg[i].call(this, func());
        }
        return results;
    }
}


module.exports = compose;


