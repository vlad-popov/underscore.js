var each = require('./each.js');

function reduceRight(list, iterator, memo) {
    for (var i = list.length-1; i >= 0; i--) {
        memo = iterator(memo, list[i])
    }
    return memo
}

module.exports = reduceRight;