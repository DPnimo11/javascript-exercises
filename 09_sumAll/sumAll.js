const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return "ERROR"
    } else {
        var ans = 0;
        [start, end] = start < end? [start, end] : [end, start];
        for (start; start <= end; start++) {
            ans += start;
        }
    }
    return ans

};

// Do not edit below this line
module.exports = sumAll;