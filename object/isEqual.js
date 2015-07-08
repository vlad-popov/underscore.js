function isEqual(obj1, obj2) {
    for (var key1 in obj1) {
        console.log('1', key1);
        for (var key2 in obj2) {
            console.log('2', key2);
            if (key1 !== key2) {
//                return false;
            }

        }
    }
}


module.exports = isEqual;