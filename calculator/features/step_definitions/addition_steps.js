const { Before, Given, When, Then } = require('cucumber')
const Calculator = require('../../Calculator');
var expect = require('chai').expect;

let calculator;

         Given('the numbers {int} and {int}', function (x, y) {
           // Write code here that turns the phrase above into concrete actions
           //return 'pending';
           calculator = new Calculator(x, y);
         });

         When('they are added together', function () {
           // Write code here that turns the phrase above into concrete actions
           //return 'pending';
           calculator.add();
         });

         Then('should the result be {int}', function (total) {
           // Write code here that turns the phrase above into concrete actions
           //return 'pending';
           expect(calculator.result).to.be.equal(total);
         });
