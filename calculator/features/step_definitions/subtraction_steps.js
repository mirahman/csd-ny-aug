const { Before, Given, When, Then } = require('cucumber')
const Calculator = require('../../Calculator');
const expect = require('chai').expect;

let calculator;

Given('exactly two numbers {int} and {int}', function (x, y) {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    calculator = new Calculator(x, y);
  });

  When('we are subtracted from one to another', function () {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    calculator.subtract();
  });

  Then('we will see the result is {int}', function (diff) {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    expect(calculator.result).to.be.equal(diff);
  });