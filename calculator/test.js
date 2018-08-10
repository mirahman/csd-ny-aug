var assert = require('assert');
var operation = require('./operations');

describe('Calculator Test', function() {
  describe('Add function', function() {
    it('should return sum of two positive numbers', function() {
      assert.equal(operation.add(1,3), 4);
    });

    it('should return sum of two negative numbers', function() {
        assert.equal(operation.add(-1,-3), -4);
      });
  });

  describe('subtraction function', function() {
    it('should return difference of two positive numbers', function() {
      assert.equal(operation.subtract(3,1), 2);
    });

    it('should return difference of two negative numbers', function() {
        assert.equal(operation.subtract(-1,-3), 2);
      });
  });

  describe('multiplication function', function() {
    it('should return multiplication of two positive numbers', function() {
      assert.equal(operation.multiply(3,2), 6);
    });

    it('should return multiplication of two negative numbers', function() {
        assert.equal(operation.multiply(-1,-3), 3);
      });
  });
});