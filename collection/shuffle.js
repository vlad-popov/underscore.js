var random = require('./../test/util/getRandom.js'),
    clone = require('./../array/clone.js'),
    map = require('./../collection/map.js');

function shuffle(arr) {
    var copy = clone(arr);

    return map(arr, function() {
        return copy.splice(random(0, copy.length), 1)[0];
    });
}


module.exports = shuffle;