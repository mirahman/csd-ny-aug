var expect = require('chai').expect;
var operation = require('./operations');

describe('Calculator BDD', function() {
  describe('Add function', function() {
    it('should return sum of two positive numbers', function() {
        //assert.equal(operation.add(1,3), 4);
        expect(operation.add(1,3)).to.be.equal(4);
    });

    
    it('should return sum of two negative numbers', function() {
        expect(operation.add(-1,-3)).to.be.equal(-4);
      });
      
  });

  
  describe('subtraction function', function() {
    it('should return difference of two positive numbers', function() {
      //assert.equal(operation.subtract(3,1), 2);
      expect(operation.subtract(10,3)).to.be.equal(7);
    });

    it('should return difference of two negative numbers', function() {
        //assert.equal(operation.subtract(-1,-3), 2);
        expect(operation.subtract(-1,-3)).to.be.equal(2);
      });
  });

  describe('multiplication function', function() {
    it('should return multiplication of two positive numbers', function() {
      //assert.equal(operation.multiply(3,2), 6);
      expect(operation.multiply(3,3)).to.be.equal(9);
    });

    it('should return multiplication of two negative numbers', function() {
        //assert.equal(operation.multiply(-1,-3), 3);
        expect(operation.multiply(-2,-3)).to.be.equal(6);
      });
  });
  
});