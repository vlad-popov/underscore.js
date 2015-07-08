function isNull(obj) {
    return Object.prototype.toString.call(obj) === '[object Null]'
}

module.exports = isNull;