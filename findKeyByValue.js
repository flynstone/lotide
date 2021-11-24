const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
}

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
