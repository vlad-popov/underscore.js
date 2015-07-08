function range(stop, start, step) {
    var newArr = [];
    if (step === undefined) {
        step = 1;
    }
    if (start === undefined) {
        start = 0;
    }
    for (var i = start; i < stop || i > stop; i+=step) {
        newArr.push(i);
    }
    return newArr;
}





module.exports = range;