const reverseString = function (text) {
  let word = text;
  const myArray = word.split("");
  const reverse = myArray.reverse();
  return reverse();
};

// Do not edit below this line
module.exports = reverseString;
