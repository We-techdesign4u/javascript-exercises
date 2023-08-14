const repeatString = function (text, repeatedtimes) {
  if (repeatedtimes < 0) {
    return "ERROR";
  } else {
    return text.repeat(repeatedtimes);
  }
};

// Do not edit below this line
module.exports = repeatString;
