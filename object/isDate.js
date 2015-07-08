function isDate(obj) {
    return Object.prototype.toString.call(obj) === '[object Date]';
}

module.exports = isDate;