function getRandomIndex (arr) {
    return Math.floor(Math.random() * ((arr.length-1) + 1))
}

function sample(arr, n) {
    if (n === undefined) {
        return arr[getRandomIndex(arr)];
    }

    var newArr = [];
    while (newArr.length < n) {
        newArr.push(arr[getRandomIndex(arr)]);
    }
    return newArr;
}

module.exports = sample;