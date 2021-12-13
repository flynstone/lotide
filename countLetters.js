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
module.exports = countLetters;
// console.log(countLetters("LHL"));