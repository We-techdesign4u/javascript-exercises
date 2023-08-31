const add = function (addNum1, addNum2) {
  return addNum1 + addNum2;
};

const subtract = function (subNum1, subNum2) {
  return subNum1 - subNum2;
};

const sum = function (arr) {
  let sumarr = 0;
  for (let i = 0; i < arr.length; i++) {
    sumarr += arr[i];
  }
  return sumarr;
};

const multiply = function (mult) {
  let multarr = 1;
  for (let index = 0; index < mult.length; index++) {
    multarr = multarr * mult[index];
  }
  return multarr;
};

const power = function (pow1, pow2) {
  return Math.pow(pow1, pow2);
};

const factorial = function (agu) {
  let mul = 1;
  for (i = 1; i <= agu; i++) {
    mul *= i;
  }
  return mul;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
