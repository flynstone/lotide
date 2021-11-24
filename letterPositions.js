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

const letterPositions = function(sentence) {
  const results = {};

  sentence.split("").forEach(value => {
    results[value] = [];
  });

  let text = "";
    for (let i = 0; i < sentence.length; i++) {
    results[sentence[i]].push(i);
  }
  
  return results;
};

console.log(letterPositions("hello"));

assertArrayEquals(letterPositions("hello").e, [1]);
