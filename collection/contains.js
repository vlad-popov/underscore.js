var some = require('./some.js'),
    isArray = require('../object/isArray');

function contains(list, value) {
    if (isArray(list)) {
        return list.indexOf(value) !== -1
    }
    return some(list, value);
}


module.exports = contains;