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

const assertArraysEquals = function (actual, expected) {
  const compare = eqArrays(actual, expected);

  if (compare) {
    console.log(`✅✅✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
}

const middle = function (array) {
  const values = array.length;

  if (values < 3) {
    return [];

  // Even numbers
  } else if (values % 2 === 0) {
    return [array[Math.round(values / 2) - 1], array[Math.round(values / 2)]];
  
  // Odd numbers
  } else if (values % 2 === 1) {
    return [array[Math.floor(values / 2)]];
  }
}

// For arrays with one or two elements, there is no middle. Returns empty string
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

// For arrays with odd number of elements, an array containing a single middle element should be returned.
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

