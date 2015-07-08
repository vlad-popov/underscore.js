var each = require('./each.js');

function reduce(list, iterator, memo) {
    each(list, function (el) {
        memo = iterator(memo, el);
    });
    return memo
}

module.exports = reduce;