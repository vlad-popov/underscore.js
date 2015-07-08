var collection = require('./../_collection.js'),
    each = require('./../collection/each.js'),
    every = require('./../collection/every.js'),
    filter = require('./../collection/filter.js'),
    find = require('./../collection/find.js'),
    map = require('./../collection/map.js'),
    max = require('./../collection/max.js'),
    min = require('./../collection/min.js'),
    pluck = require('./../collection/pluck.js'),
    sortBy = require('./../collection/sortBy.js'),
    reject = require('./../collection/reject.js'),
    groupBy = require('./../collection/groupBy.js'),
    shuffle = require('./../collection/shuffle.js'),
    invoke = require('./../collection/invoke.js'),
    reduce = require('./../collection/reduce.js'),
    reduceRight = require('./../collection/reduceRight.js'),
    contains = require('./../collection/contains.js'),
    sample = require('./../collection/sample.js'),
    some = require('./../collection/some.js');



var equalUtils = require('./util/shallowEqual.js');
var objectEqual = equalUtils.shallowEqual;
var arrayEqual = equalUtils.arrayEqual;



console.log('every:', [
   every(collection, function(el){return el.sex === 'female'}) === false,
   every(collection, function(el){return el.age >= 20}) === true
]);

console.log('max:', [
   max(collection, 'age').name === 'Vitya',
   max(collection, 'id').name === 'Sergey'
]);

console.log('min:', [
   min(collection, 'age').name === 'Vlad',
   min(collection, 'id').name === 'Vlad'
]);

console.log('some:', [
   some([1,4,4,5,2,7], 2) === true,
   some([1,4,4,5,2,7], 3) === false,
   some([1,4,4,5,2,7], 'a') === false
]);

console.log('find:', [
   find(collection, function(el){return el.age === 25}).name === 'Murad',
   find(collection, function(el){return el.name === 'Marina'}).id === 6
]);

console.log('filter:', [
   filter(collection, function(el){return el.age > 30}).length === 4,
   filter(collection, function(el){return el.id < 3}).length === 2
]);

console.log('sample:', [
        typeof sample([1, 2, 3, 4, 5, 6]) === 'number',
        sample([1, 2, 3, 4, 5, 6], 3).length === 3
]);

var pluckNames = pluck(collection, 'name');
var pluckIds = pluck(collection, 'id');
console.log('pluck:', [
        arrayEqual(pluckIds, [ 1, 2, 6, 3, 4, 7, 5 ]),
        pluckNames.length === 7,
        pluckNames[0] === 'Vlad',
        pluckNames[6] === 'Boris April'
]);

console.log('reject:', [
        reject(collection, function(el){return el.sex === 'male'}).length === 3,
        reject(collection, function(el){return el.sex === 'male'})[0].name === 'Marina' ,
        reject(collection, function(el){return el.sex === 'female'}).length === 5,
        reject(collection, function(el){return el.age > 23}).length === 2
]);

console.log('map:', [
        map(collection, function(el){return 100 - el.age})[0] === 80,
        map(collection, function(el){return 100 - el.age})[6] === 58,
        map(collection, function(el){return 100 - el.age}).length === 7
]);

console.log('contains:', [
        contains([1, 2, 3], 3) === true,
        contains([1, 2, 3], 4) === false,
        contains('abc', 'a') === true
]);

console.log('invoke:', [
    arrayEqual(invoke([
        [5, 1, 7],
        [3, 2, 1]
    ], 'sort'), [[1, 5, 7], [1, 2, 3]])
]);

console.log('sortBy:', [
     arrayEqual(
         sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num) }),
         [5, 4, 6, 3, 1, 2]
     )
]);

//console.log('groupBy:', [
//    objectEqual(groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); }), {1: [1.3], 2: [2.1, 2.4]}),
////    objectEqual(groupBy(['one', 'two', 'three'], 'length'), {3: ["one", "two"], 5: ["three"]})
//    groupBy(['one', 'two', 'three'], 'length')
//]);

var originalArr = [1, 2, 3, 4, 5, 6];
var shuffleArr = shuffle(originalArr);
console.log('shuffle:', [
    filter(shuffleArr, function(el){
        return contains(originalArr, el)
    }).length === originalArr.length
]);

console.log('reduce:', [
    reduce([1, 2, 3], function(memo, num){ return memo + num; }, 10) === 16,
    reduce([1, 2, 3], function(memo, num){ return memo - num; }, 0) === -6
]);

console.log('reduceRight:', [
    arrayEqual(reduceRight([[0, 1], [2, 3], [4, 5]], function(a, b) { return a.concat(b); }, []), [4, 5, 2, 3, 0, 1])
]);




/*
* rewrite to reduce:
 + filter.js
 + map.js
 + min.js
 + max.js
 ~ object.js
 ~ zip.js (2 reduce)
* */


/*
* rewrite to filter:
* + without.js
* + reject.js
* + compact.js
* + difference.js
* */


/*
* rewrite to map:
    + invoke.js (у тебя вообще логика неправильна)
    + shuffle.js
* */



/*
 + map
 + find
 + filter
 + where
 + findWhere
 + reject
 + every
 + some
 + pluck
 + max
 + min
 + sample
 + each
 + contains
 + invoke
 + sortBy
 ~ groupBy
 - indexBy
 - countBy
 + shuffle
 + reduce
 + reduceRight
* */