function isUndefined(obj) {
    return Object.prototype.toString.call(obj) === '[object Undefined]'
}

module.exports = isUndefined;