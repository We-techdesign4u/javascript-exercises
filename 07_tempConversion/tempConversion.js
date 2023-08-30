const convertToCelsius = function (fahrenheit) {
  //x °F ≘ (x − 32) × 5/9 °C
  let result = (fahrenheit - 32) * (5 / 9);
  return Math.round(result * 10) / 10;
  // return result;
};

const convertToFahrenheit = function (celsius) {
  //x °C ≘ (x × 9/5 + 32) °F
  let secresult = celsius * (9 / 5) + 32;
  return Math.round(secresult * 10) / 10;
  // return secresult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
