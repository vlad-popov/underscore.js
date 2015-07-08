var reduce = require('./../collection/reduce.js');


function zip() {
    var result = [],
        arg = arguments;

    return reduce(arg, function (memo, el) {
        var newArr = [];
        return reduce(arg[el].length, function (memo2, el2) {
//        console.log('_arguments_:', arg);
            newArr.push(arg[el2][el]);
            return newArr;
        }, newArr)
    }, result)
}

//function zip() {
//    var result = [];
//
//    for (var i = 0; i < arguments.length; i++) {
//        var newArr = [];
//        for (var j = 0; j < arguments[i].length; j++) {
//            newArr.push(arguments[j][i]);
//        }
//        result.push(newArr);
//    }
//    return result;
//}

module.exports = zip;