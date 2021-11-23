// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function(items) {
  return items.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
