var isArray = require('../../object/isArray.js'),
    isObject = require('../../object/isObject.js');

function arrayEqual (x, y) {
    if (!(x instanceof Array) || !(y instanceof Array)) {
        return false
    }
    if (x.length !== y.length) {
        return false
    }
    for (var i = 0; i < x.length; i++) {
        if(x[i] instanceof Array && y[i] instanceof Array) {
            return arrayEqual(x[i], y[i])
        } else if (x[i] instanceof Object && y[i] instanceof Object) {
            return shallowEqual(x[i], y[i])
        } else if (x[i] !== y[i]) {
            return false
        }
    }
    return true
}


function shallowEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }

    if (typeof objA !== 'object' || objA === null ||
        typeof objB !== 'object' || objB === null) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    // Test for A's keys different from B.
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    for (var i = 0; i < keysA.length; i++) {
        if(isArray(objA[keysA[i]]) && isArray(objB[keysA[i]])) {
            return arrayEqual(objA[keysA[i]], objB[keysA[i]]);
        } else if (isObject(objA[keysA[i]]) && isObject(objB[keysA[i]])) {
            return shallowEqual(objA[keysA[i]], objB[keysA[i]]);
        } else if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
            return false;
        }
    }

    return true;
}

module.exports = {
    shallowEqual: shallowEqual,
    arrayEqual: arrayEqual
};