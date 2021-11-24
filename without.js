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

const without = function (source, items) {
  const array = [];

  for (let i = 0; i < source.length; i++) {
    let isMatch = false;
    for (let j = 0; j < items.length; j++) {
      if (source[i] === items[j]) {
        isMatch = true;
      }
    }

    if (!isMatch) {
      array.push(source[i]);
    }
  }
  return array;
}

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
