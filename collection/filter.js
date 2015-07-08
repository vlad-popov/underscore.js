var reduce = require('./reduce.js');

function filter(arr, callback){
    var newArr = [];
    return reduce(arr, function(el, num) {
        if (callback(num)) {
            newArr.push(num);
        }
        return newArr;
    }, newArr);
}


module.exports = filter;