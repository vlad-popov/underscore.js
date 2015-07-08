function partial(func, a) {
    return function(b) {
        return func(a, b)
    }
}


module.exports = partial;