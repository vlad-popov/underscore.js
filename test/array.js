var array = require('./../_array.js'),
    last = require('./../array/last.js'),
    compact = require('./../array/compact.js'),
    initial = require('./../array/initial.js'),
    uniq = require('./../array/uniq.js'),
    zip = require('./../array/zip.js'),
    rest = require('./../array/rest.js'),
    difference = require('./../array/difference.js'),
    intersection = require('./../array/intersection.js'),
    partition = require('./../array/partition.js'),
    clone = require('./../array/clone.js'),
    indexOf = require('./../array/indexOf.js'),
    union = require('./../array/union.js'),
    object = require('./../array/object.js'),
    range = require('./../array/range.js'),
    without = require('./../array/without.js'),
    first = require('./../array/first.js');

var equalUtils = require('./util/shallowEqual.js');
var objectEqual = equalUtils.shallowEqual;
var arrayEqual = equalUtils.arrayEqual;


var partial = require('./../function/partial.js');


console.log('first:', [
        first(array.simple, 3).length === 3,
        first(array.simple) === 1
]);

console.log('last:', [
        last(array.simple, 3)[0] === 3,
        last(array.simple, 3)[2] === 4,
        last(array.simple) === 4
]);



console.log('rest:', [
    arrayEqual(rest(array.simple), [2, 1, 0, 3, 1, 4]),
    arrayEqual(rest(array.simple, 2), [1, 0, 3, 1, 4])
]);

console.log('compact:', [
    arrayEqual(compact([1, 4, 5, '', false, 9, 0, undefined, NaN, null]), [1, 4, 5, 9])
]);

console.log('indexOf:', [
    indexOf([1, 2, 3], 2) === 1,
    indexOf([1, 2, 3], 4) === -1
]);


var initialWithArr = partial(initial, [1, 4, 5, 9, 0]);
console.log('initial:', [
    arrayEqual(initialWithArr(), [1, 4, 5, 9]),
    arrayEqual(initialWithArr(2), [1, 4, 5])
]);

console.log('without:', [
    arrayEqual(without([1, 4, 5, 9, 0]), [1, 4, 5, 9, 0]),
    arrayEqual(without([1, 4, 5, 9, 0], 1), [4, 5, 9, 0])
]);

var partitionWithArr = partial(partition, [1, 4, 5, 9, 0]);

console.log('partition:', [
    arrayEqual(partitionWithArr(function(el){return el > 4})[0], [5,9]),
    arrayEqual(partitionWithArr(function(el){return el > 4})[1], [1,4,0]),
    arrayEqual(partitionWithArr(function(el){return Math.pow(el, 2) > 15})[0], [4, 5, 9]),
    arrayEqual(partitionWithArr(function(el){return Math.pow(el, 2) > 15})[1],  [1, 0])
]);


///  как реализовать без сортировки?

console.log('union:', [
//    false // возвращает элементы в отсортированом порядке
//    arrayEqual(union([1, 2, 3], [101, 2, 1, 10], [2, 1]), [1, 2, 3, 101, 10]),
    union([1, 2, 3], [101, 2, 1, 10], [2, 1, 2])
]);

//console.log('zip:', [
//    arrayEqual(zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false])[0], [ 'moe', 30, true ]),
//    arrayEqual(zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false])[2], [ 'curly', 50, false ])
//]);

console.log('uniq:', [
    arrayEqual(uniq([1, 1, 1, 2, 2, 3, 4], true), [1, 2, 3, 4]),
    arrayEqual(uniq([1, 2, 1, 3, 1, 4]), [1, 2, 3, 4])
]);

console.log('difference:', [
    arrayEqual(difference([1, 2, 3, 4, 5], [5, 2, 10]), [1, 3, 4]),
    arrayEqual(difference([5, 1, 4, 4, 10], [4, 1]), [5, 10])
]);

//console.log('intersection:', [
//    arrayEqual(intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]), [1, 2]),
//    intersection([1, 2, 3], [101, 2, 1, 10], [2, 1])
//]);

///// как подогнать под второй ключ?
console.log('object:', [
//    objectEqual(object(['moe', 'larry', 'curly'], [30, 40, 50]), { moe: 30, larry: 40, curly: 50 })
    object(['moe', 'larry', 'curly'], [30, 40, 50])
//    object([['moe', 30], ['larry', 40], ['curly', 50]])
]);

console.log('range:', [
    arrayEqual(range(10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    arrayEqual(range(30, 0, 5), [0, 5, 10, 15, 20, 25]),
    arrayEqual(range(11, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    arrayEqual(range(0), []),
    arrayEqual(range(-10, 0, -1), [0, -1, -2, -3, -4, -5, -6, -7, -8, -9])
]);


console.log('clone:', [
    arrayEqual(clone([123, '123', null, {key: {key2: ['value']}}]), [123, '123', null, {key: {key2: ['value']}}]),
    arrayEqual(
        clone([123, '123', null, {key: {key2: ['value']}}]),
        [123, '123', null, {key: {key2: ['value2']}}]
    ) === false
]);


/*
 + first - первый
 + last - последний
 + rest -
 + compact
 + initial
 - flatten
 + without
 + partition
 ~ union
 - intersection
 + difference
 + zip
 + indexOf
 + uniq
 ~ object
 + range
 */
