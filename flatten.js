const flatten = function (array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      result.push(array[i]);
    } else {
      for (let j = 0; j < array[i].length; j++) {
        result.push(array[i][j]);
      }
    }
  }
  return result;
}

module.exports = flatten;
/*
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, [2], [3, 4], [5], [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 'cat'], 5, [6]]), [1, 2, 3, 'cat', 5, 6]);
*/
