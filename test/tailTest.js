const assert = require("../node_modules/chai").assert;
const tail = require('../tail');

describe('#tail', () => {
  it('Should return 5 when given [0,5]', () => {
    assert.deepEqual(tail([0,5]), [5]);
  }) 
  it('Should return ["Lighthouse", "labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  })
})
