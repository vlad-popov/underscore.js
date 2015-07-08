var map = require('./../collection/map.js');

function clone(src) {
    return map(src, function(el){return el});
}

module.exports = clone;