const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", function () {
  it("should return an array containing a single middle element for arrays with odd number", function () {
    assert.deepEqual(middle([1, 2, 3]), [2]);
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return an array containing two middle element for arrays with even number", function () {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
