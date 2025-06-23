const convertToCelsius = function(temp) {
  var ans = (temp - 32) * 5 / 9;
  return  Number.isInteger(ans) ? ans :  + ans.toFixed(1);
};

const convertToFahrenheit = function(temp) {
  var ans = temp * 9 / 5 + 32;
  return  Number.isInteger(ans) ? ans : + ans.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
