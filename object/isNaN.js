function isNaN(obj) {
    if (Object.prototype.toString.call(obj) === '[object Undefined]') {
        return true;
    } else if (typeof obj === 'object') {
        return false;
    } else if (obj !== obj) {
        return true;
    }
}

module.exports = isNaN;