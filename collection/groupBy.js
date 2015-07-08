var clone = require('./../array/clone.js');

function groupBy(list, iterator) {
    var copy = clone(list),
        newObject = {};

    if (typeof iterator === 'string') {
        copy.sort(function (a, b) {
            return a.iterator - b.iterator
        })
    }

    return copy;

}

module.exports = groupBy;