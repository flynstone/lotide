const middle = require('../middle');
const assertArrayEquals = require('../assertArrayEquals');

assertArrayEquals(middle([1,2,3]), [2], true);
assertArrayEquals(middle([1,4,3]), [4], true);
assertArrayEquals(middle([1,2,3,4]), [2,3], true);
assertArrayEquals(middle([1,2,3,4]), [2], false);

