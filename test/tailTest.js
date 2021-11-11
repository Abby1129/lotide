const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", function(){
  it("returns everything except for the first item provided array", function(){
    assert.deepEqual(tail([1, 2, 3]), [2, 3])
  })
})
