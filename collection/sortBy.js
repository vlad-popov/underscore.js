var clone = require('./../array/clone.js');

function sortBy(list, iterator) {
    var copy = clone(list);

    copy.sort(function (a, b) {
        return iterator(a) - iterator(b);
    });

    return copy;
}


module.exports = sortBy;