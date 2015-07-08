module.exports = function (arr, iterator) {
    for (var i = 0; i < arr.length; i++) {
        iterator(arr[i]);
    }
    return arr;
};


/*
 + filter.js
 + max.js
 + min.js
 + reject.js
 + map.js
 + pluck.js
* */