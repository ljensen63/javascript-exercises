const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sum;
  if(arr.length > 0){
    sum = arr[0];
  }
  else {
    return 0;
  }
	for( let i = 1; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++){
    sum *= arr[i];
  }
  return sum;
};

const power = function(base, power) {
	let sum = 1;
  for( let i = 0; i < power; i++){
    sum *= base;
  }

  return sum;
};

const factorial = function(num) {
  let sum = 1;
	for (let i = num; i > 0; i--){
    sum *= i;
  }

  return sum;
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
