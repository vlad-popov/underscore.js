var map = require('./map.js');

function invoke(list, methodName) {
    return map(list, function (el) {
        return el[methodName]();
    });

}


module.exports = invoke;