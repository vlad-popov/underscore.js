function has(obj, key) {
    if (obj[key] !== undefined) {
        return true;
    }
    return false;
}


module.exports = has;