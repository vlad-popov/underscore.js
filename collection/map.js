var reduce = require('./reduce.js');

function map(arr, callback) {
    var newArr = [];
    return reduce(arr, function(memo, num){
        newArr.push(callback(num));
        return newArr;
    }, newArr);

}

module.exports = map;