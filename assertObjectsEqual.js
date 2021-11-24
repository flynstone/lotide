const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {

    for (let key in object1) {
      if (object1[key] instanceof Object) {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  const match = eqObjects(actual, expected);

    if (match) {
    console.log(`✅✅✅  Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const firstObj = {
  username: "guest",
  password: "password"
}

const secondObj = {
  username: "guest",
  password: "fail"
}

const thirdObj = {
  username: "guest",
  password: "password"
}

assertObjectsEqual(firstObj, thirdObj); // => true
assertObjectsEqual(firstObj, secondObj); // => false
