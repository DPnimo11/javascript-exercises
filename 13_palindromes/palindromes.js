const palindromes = function (string) {
    let bruh = "abcdefghijklmnopqrstuvwxyz123456789"
    return string.split("")
                 .filter((val) => bruh.includes(val.toLowerCase()))
                 .map((val) => val.toLowerCase())
                 .join("") === string.split("")
                 .filter((val) => bruh.includes(val.toLowerCase()))
                 .map((val) => val.toLowerCase())
                 .reverse()
                 .join("")
};

// Do not edit below this line
module.exports = palindromes;
