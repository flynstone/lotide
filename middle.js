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

module.exports = middle;
