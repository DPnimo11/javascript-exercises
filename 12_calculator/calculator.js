const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(args) {
	return args.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(args) {
  return args.reduce((acc, curr) => acc * curr, 1);
};

const power = function(base, power) {
  let ans = 1;
  while (power != 0) {
    ans *= base;
    power--;
  }
  return ans;
    
};

const factorial = function(num) {
	let ans = 1;
  while (num != 0) {
    ans *= num--;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
