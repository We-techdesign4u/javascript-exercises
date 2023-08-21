const sumAll = function (n, secondNum) {
  let m = n - 1;
  let x = 0;
  let newSecNum = secondNum - 1;

  if (n < 0) {
    x = "ERROR";
  }

  if (typeof n !== "number" || typeof secondNum !== "number") {
    x = "ERROR";
  }

  if (n > secondNum) {
    while (newSecNum < n) {
      newSecNum++;
      x += newSecNum;
    }
  }

  if (typeof n == "number" && typeof secondNum == "number" && n > 0) {
    while (m < secondNum) {
      m++;
      x += m;
    }
  } else {
    x = "ERROR";
  }

  return x;
};

// Do not edit below this line
module.exports = sumAll;
