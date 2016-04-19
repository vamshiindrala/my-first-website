var assert = require('assert');
var calculator = require('../js/calc.js');

//Calculator Mocha tests
describe('Calculator', function() {
	describe('isTokenAnOperator', function () {
		it('should return true when input token is an operator', function () {
			assert.equal(calculator.isTokenAnOperator('+'),true);
		});

		it('should return true when input token is not an operator', function () {
			assert.equal(calculator.isTokenAnOperator('1'),false);
		});

		it('should return true when input token is null or undefined', function () {
			assert.equal(calculator.isTokenAnOperator(undefined),false);
		});
	});

	describe('constructEvalString', function () {
		it('should return a empty array when I dont have arguments', function () {
			var array = calculator.constructEvalString('',[]);
			assert.equal(array[0],undefined);
			assert.equal(array.length,0);
		});

		it('should return a single item array with value 5 when I pass 5 to an empty array', function () {
			var array = calculator.constructEvalString('5',[]);
			assert.equal(array[0],5);
			assert.equal(array.length,1);
		});

		it('should return a single item array with value 55 when I pass 5 to an ["5"] array', function () {
			var array = calculator.constructEvalString('5',['5']);
			assert.equal(array[0],55);
			assert.equal(array.length,1);
		});

		it('should return a two item array with value ["55","+"] when I pass "+" to an ["55"] array', function () {
			var array = calculator.constructEvalString('+',['55']);
			assert.equal(array[1],"+");
			assert.equal(array.length,2);
		});

		it('should return a two item array with value ["55","+"] when I pass "+" to an ["55","+"] array', function () {
			var array = calculator.constructEvalString('+',['55','+']);
			assert.equal(array[1],"+");
			assert.equal(array.length,2);
		});

		it('should return a two item array with value ["55","-"] when I pass "-" to an ["55","+"] array', function () {
			var array = calculator.constructEvalString('-',['55','+']);
			assert.equal(array[1],"-");
			assert.equal(array.length,2);
		});

		it('should return a three item array with value ["55","-","5"] when I pass "5" to an ["55","-"] array', function () {
			var array = calculator.constructEvalString('5',['55','-']);
			assert.equal(array[2],"5");
			assert.equal(array.length,3);
		});

		it('should return a three item array with value ["55","-","55"] when I pass "5" to an ["55","-","5"] array', function () {
			var array = calculator.constructEvalString('5',['55','-','5']);
			assert.equal(array[2],"55");
			assert.equal(array.length,3);
		});
	});
	describe('getResult',function(){
		it('should return an evaluated string for passed in array ["2","+","2","-","2"]',function(){
			var array = ['2','+','2','-','2'];
			assert.equal(calculator.getResult(array),2);
		});

		it('should return an evaluated string for passed in array ["+","2","-","2"]',function(){
			var array = ['+','2','-','2'];
			assert.equal(calculator.getResult(array),0);
		});

		it('should return an evaluated string for passed in array ["+","2","-"]',function(){
			var array = ['+','2','-'];
			assert.equal(calculator.getResult(array),2);
		});
	});
	});