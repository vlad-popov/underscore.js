function once(func) {
    var results;
    return function returned () {
        if (results === undefined) {
            results = func();
        }
        return results;
    }
}


module.exports = once;