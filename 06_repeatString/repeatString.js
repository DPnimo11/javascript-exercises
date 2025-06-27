const repeatString = function(string, repetitions) {
    if (repetitions < 0) {
        return "ERROR";
    }
    var answer = ""
    for (let i = 0; i < repetitions; i++) {
        answer += string
    }
    return answer
};

// Do not edit below this line
module.exports = repeatString;
