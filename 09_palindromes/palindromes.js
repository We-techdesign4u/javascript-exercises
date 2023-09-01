const palindromes = function (word) {
  var wordnopunc = word.replace(/[^a-zA-Z0-9]/g, "");
  const text = wordnopunc.split("").reverse().join("");
  return wordnopunc.toLowerCase() === text.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
