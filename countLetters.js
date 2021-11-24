const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (letters) {
  
  let result = {};

   letters.split("").forEach(value => {
    result[value] = 0;
  });

  letters.split("").forEach(value => {
    result[value] ++;
  });

  return result;
}

console.log(countLetters("LHL"));
