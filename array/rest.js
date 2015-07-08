var clone = require('./clone.js');


// todo: slice
function rest(arr, index) {
    var copy = clone(arr);
    if (index === undefined) {
        copy.splice(0, 1);
        return copy;
    }
    copy.splice(0, index);
    return copy;
}


module.exports = rest;