var partial = require('./../function/partial.js'),
    once = require('./../function/once.js'),
    compose = require('./../function/compose.js'),
    throttle = require('./../function/throttle.js'),
    delay = require('./../function/delay.js');



var equalUtils = require('./util/shallowEqual.js');
var objectEqual = equalUtils.shallowEqual;
var arrayEqual = equalUtils.arrayEqual;

var add = function(a, b) { return a + b; },
    add5 = partial(add, 5),
    add12 = partial(add, 12);


console.log('partial:', [
        add5(10) === 15,
        add5(15) === 20,
        add5(22) === 27,
        add12(20) === 32,
        add12(30) === 42
]);

console.log('delay:', [
        true
]);
//var delayConsole = delay(function(){ console.log('delayed:', new Date().getSeconds()) }, 2000);
//
//console.log('start:', new Date().getSeconds());
//delayConsole();






var x = 0;
function inc() {
    x++;
    return x;
}
var incOnce = once(inc);
console.log('once:', [
    incOnce() === 1,
    incOnce() === 1,
    incOnce() === 1
]);

//var throttleDelayConsole = delay(function(){ console.log('delayed:', new Date().getSeconds()) }, 2000);
//console.log('start:', new Date().getSeconds());
//throttleDelayConsole(inc);



var greet = function(name){ return "hi: " + name; };
var exclaim = function(statement){ return statement + "!"; };
var welcome = compose(exclaim, greet);

console.log('compose:', [
    welcome('Vlad')
]);



/*
+ partial
+ delay
- throttle
- memoize
- debounce
- defer
+ once
- after
- compose !
*/
