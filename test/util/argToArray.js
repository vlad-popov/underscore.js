function argToArray(arg) {
    return Array.prototype.slice.call(arg);
}

module.exports = argToArray;