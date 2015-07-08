function isNumber(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]'
}

module.exports = isNumber;