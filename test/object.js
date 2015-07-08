var keys = require('./../object/keys.js'),
    values = require('./../object/values.js'),
    pairs = require('./../object/pairs.js'),
    invert = require('./../object/invert.js'),
//    functions = require('./../object/functions.js'),
    extend = require('./../object/extend.js'),
    omit = require('./../object/omit.js'),
    cloneObj = require('./../object/cloneObj.js'),
    has = require('./../object/has.js'),
//    isEqual = require('./../object/isEqual.js'),
    isEmpty = require('./../object/isEmpty.js'),
//    isElement = require('./../object/isElement.js'),
    isArray = require('./../object/isArray.js'),
    isObject = require('./../object/isObject.js'),
    isFunction = require('./../object/isFunction.js'),
    isString = require('./../object/isString.js'),
    isNumber = require('./../object/isNumber.js'),
    isBoolean = require('./../object/isBoolean.js'),
    isDate = require('./../object/isDate.js'),
    isNaN = require('./../object/isNaN.js'),
    isNull = require('./../object/isNull.js'),
    isUndefined = require('./../object/isUndefined.js');
    pick = require('./../object/pick.js');


var equalUtils = require('./util/shallowEqual.js');
var objectEqual = equalUtils.shallowEqual;
var arrayEqual = equalUtils.arrayEqual;


console.log('keys:', [
    arrayEqual(keys({one: 1, two: 2, three: 3}), [ 'one', 'two', 'three' ])
]);

console.log('values:', [
    arrayEqual(values({one: 1, two: 2, three: 3}), [ 1, 2, 3 ])
]);

console.log('pairs:', [
    arrayEqual(pairs({one: 1, two: 2, three: 3})[0], ["one", 1]),
    arrayEqual(pairs({one: 1, two: 2, three: 3})[2], ["three", 3])
]);

console.log('pick:', [
    objectEqual(pick({name: 'moe', age: 50, userid: 'moe1', work: 'yes'}, 'name', 'age', 'work'), {name: 'moe', age: 50, work: 'yes'}),
    objectEqual(pick({name: 'moe', age: 50, userid: 'moe1'}, 'name'), {name: 'moe'}),
    objectEqual(pick({name: 'moe', age: 50, userid: 'moe1'}, 'userid'), {userid: 'moe1'})
]);

console.log('omit:', [
    objectEqual(omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid'), {name: 'moe', age: 50}),
    objectEqual(omit({name: 'moe', age: 50, userid: 'moe1'}, 'name'), {age: 50, userid: 'moe1'})
]);

console.log('cloneObj:', [
    objectEqual(cloneObj({name: 'moe', age: 50}), {name: 'moe', age: 50}),
    objectEqual(cloneObj({name: 'moe'}), {name: 'moe'})
]);

//console.log('isEqual:', [
//    isEqual({name: 'moe', age: 50}, {name: 'moe', age: 50}),
//    objectEqual(isEqual({name: 'moe'}), {name: 'moe'})
//]);

console.log('isEmpty:', [
    isEmpty({name: 'moe', age: 50}) === false,
    isEmpty({})
]);

console.log('isArray:', [
    isArray({name: 'moe', age: 50}) === false,
    isArray([1, 3, 4]) === true,
    isArray([]) === true
]);

console.log('isObject:', [
    isObject({name: 'moe', age: 50}) === true,
    isObject([1, 3, 4]) === false,
    isObject([]) === false
]);

console.log('isFunction:', [
    isFunction({name: 'moe', age: 50}) === false,
    isFunction(function(a,b){return a-b}) === true,
    isFunction([]) === false
]);

console.log('isString:', [
    isString({name: 'moe', age: 50}) === false,
    isString('abc') === true,
    isString('') === true
]);

console.log('isNumber:', [
    isNumber({name: 'moe', age: 50}) === false,
    isNumber('abc') === false,
    isNumber(1) === true
]);

console.log('isBoolean:', [
    isBoolean({name: 'moe', age: 50}) === false,
    isBoolean('abc') === false,
    isBoolean(true) === true
]);

console.log('isDate:', [
        isDate({name: 'moe', age: 50}) === false,
        isDate('abc') === false,
        isDate(new Date()) === true
]);

console.log('isNaN:', [
        isNaN({name: 'moe', age: 50}) === false,
        isNaN(undefined) === true,
        isNaN(NaN) === true
]);

console.log('isNull:', [
        isNull({name: 'moe', age: 50}) === false,
        isNull('abc') === false,
        isNull(null) === true
]);

console.log('isUndefined:', [
        isUndefined({name: 'moe', age: 50}) === false,
        isUndefined('abc') === false,
        isUndefined(undefined) === true
]);

console.log('has:', [
        has({name: 'moe', age: 50, userid: 'moe1'}, 'userid') === true,
        has({name: 'moe', age: 50, userid: 'moe1'}, 'sex') === false,
        has({name: 'moe', age: 50, userid: 'moe1'}, 'name') === true
]);

/////////
console.log('extend:', [
        extend({name : 'moe'}, {age : 50})
]);
/////////


/*
 + keys
 + values
 + pairs
 ~ invert
 - functions
 ~ extend
 + pick
 + omit
 + cloneObj
 + has
 ~ isEqual
 + isEmpty
 - isElement
 + isArray
 + isObject
 + isFunction
 + isString
 + isNumber
 + isBoolean
 + isDate
 + isNaN
 + isNull
 + isUndefined
 */

