const removeFromArray = function ([...newaray], ...strin) {
  let parray = [];

  for (let i = 0; i < newaray.length; i++) {
    if (strin.indexOf(newaray[i]) === -1) {
      parray.push(newaray[i]);
    }
  }

  return parray;
};

// Do not edit below this line
module.exports = removeFromArray;
