var reduce = require('./../collection/reduce.js');
var indexOf = require('./../array/indexOf.js');

function union() {
    var arg = arguments;
    for (var i = 1; i < arg.length; i++) {
        reduce(arguments[i-1], function (memo, num) {
            console.log('___', arg[i][num], arg[i]);
//            if (indexOf(memo, arg[i][num]) === -1) {
//
//            }
        }, arg[0])
    }

}



module.exports = union;

