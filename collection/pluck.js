var map = require('./map.js');

function pluck(arr, key) {
    return map(arr, function (el) {
        return el[key]
    })
}


module.exports = pluck;