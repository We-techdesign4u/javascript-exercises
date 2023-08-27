const leapYears = function (Year) {
  if (Year % 4 == 0 && Year % 100 != 0) {
    return true;
  } else if (Year % 4 == 0 && Year % 100 == 0) {
    if (Year % 400 == 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
