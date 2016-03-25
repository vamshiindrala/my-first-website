var assert = require('assert');
var calculator = require('../js/calculator.js');
describe('calculator', function() {
		it('Should return Enter Valid Operation when my passed token is a invalid operation', function(){
			assert.equal(calculator.OperatorSequencetest("12++12"), "Enter Valid OPeration");
		});
});

