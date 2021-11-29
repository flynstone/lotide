const eqArrays = function (first, second) {
  let array = first.length;

  if (first.length < second.length) {
    array = second.length;
  }

  for (let i = 0; i < array; i++) {

    if (Array.isArray(first[i]) && Array.isArray(second[i])) {
      for (let j = 0; j < first[i].length; j++) {
        if (first[i][j] !== second[i][j]) {
          return false;
        }
      }
    } else if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

const assertArrayEquals = function (actual, expected) {
  const compare = eqArrays(actual, expected);

  if (compare) {
    console.log(`✅✅✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
}

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


console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

