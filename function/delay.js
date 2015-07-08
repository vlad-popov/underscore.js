function delay(func, wait) {
    return function() {return setTimeout(func, wait)};
}


module.exports = delay;