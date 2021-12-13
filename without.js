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

module.exports = without;

/*
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/
