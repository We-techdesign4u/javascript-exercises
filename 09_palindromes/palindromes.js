const palindromes = function (word) {
  var punctuation =
    /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
  var spaceRE = /\s+/g;
  var wordnopunc = word.replace(punctuation, "").replace(spaceRE, "");
  let text = "";

  const myArray = wordnopunc.split("");
  const reverse = myArray.reverse();
  for (let i = 0; i < myArray.length; i++) {
    text += myArray[i];
  }
  if (wordnopunc.toLowerCase() === text.toLowerCase()) {
    return true;
  } else {
    return false;
  }
  //   return text;
};

// Do not edit below this line
module.exports = palindromes;
