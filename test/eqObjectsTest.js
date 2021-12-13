const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

describe("#eqObjects", () => {
  it("should return true if the two objects are equal", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    // assertEqual(eqObjects(ab, ba), true); // => true 
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it("should return true for different objects with arrays as values", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(cd, dc), true);
  });

  it("should return false for objects with different properties", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    // assertEqual(eqObjects(ab, ba), true); // => true 
    assert.strictEqual(eqObjects(ab, abc), false);
  });

});


//eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => true
//
//eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
//eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false
