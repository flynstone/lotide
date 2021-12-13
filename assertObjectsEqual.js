const eqObjects = require("./eqObjects");

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  const match = eqObjects(actual, expected);

    if (match) {
    console.log(`✅✅✅  Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

/*
assertObjectsEqual({a: 1}, {a: 1});
assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2});
assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 3});
assertObjectsEqual({b: 2, a: 1}, {a: 1, b: 2});

*/
