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

const takeUntil = function(array, callback) {
  const result = [];

  for (const item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      return result;
    }
  }
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

