const removeFromArray = function(arr) {
    const avoid = Array.prototype.slice.call(arguments, 1);
    for (let i = 0; i < arr.length;) {
        if (avoid.includes(arr[i])) {
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
