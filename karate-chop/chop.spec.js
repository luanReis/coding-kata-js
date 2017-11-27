var assert = require('assert');
var chop = require('./chop.js');

describe('App', function() {
  it('should return -1 when the array is empty', function() {
    var index = chop(2, []);
    assert.equal(index, -1);
  });

  it('should return 0 when the element is present in a singleton array', function() {
    var index = chop(1, [1]);
    assert.equal(index, 0);
  });

  it('should return the element index when found in the array', function() {
    var index = chop(3, [2, 3]);
    assert.equal(index, 1);
  });

  it('should return -1 when the element is not present', function() {
    var index = chop(5, [1, 2]);
    assert.equal(index, -1);
  });

});
