var assert = require('assert');
var sinon = require('sinon');
var calculator = require('../js/calculator.js');

describe('Calculator', function() {

	describe('isTokenAnOperator', function(){
		it('should return true when my passed token is an operator', function(){
			assert.equal(calculator.isTokenAnOperator('+'), true);
		});
		it('should return false when my passed token is not an operator', function(){
			assert.equal(calculator.isTokenAnOperator('1'), false);
		});
		it('should return false when my passed token is null or undefined', function(){
			assert.equal(calculator.isTokenAnOperator(undefined), false);
		});
	});

	describe('constructEvalString', function(){
		it('should return a empty array when I dont have arguments', function(){
			var array = calculator.constructEvalString();
			assert.equal(array.length,0);
		});

		it('should return a single item array with value 2 when I pass in number 2 to an empty array', function(){
			var array = calculator.constructEvalString(2,[]);
			assert.equal(typeof array[0], 'string');
			assert.equal(array[0],'2');
			assert.equal(array.length,1);
		});

		it('should return a single item array with value 2 when I pass in 2 to an empty array', function(){
			var array = calculator.constructEvalString('2',[]);
			assert.equal(array[0],'2');
			assert.equal(array.length,1);
		});

		it('should return a single item array with value 22 when I pass in 2 to an ["2"] array', function(){
			var array = calculator.constructEvalString('2',['2']);
			assert.equal(array[0],'22');
			assert.equal(array.length,1);
		});

		it('should return a two item array ["22","+"] when I pass in "+" to an ["22"] array', function(){
			var array = calculator.constructEvalString('+',['22']);
			assert.equal(array[1],'+');
			assert.equal(array.length,2);
		});

		it('should return a two item array ["22","+"] when I pass in "+" to an ["22", "+"] array', function(){
			var array = calculator.constructEvalString('+',['22', '+']);
			assert.equal(array[1],'+');
			assert.equal(array.length,2);
		});

		it('should return a two item array ["22","-"] when I pass in "-" to an ["22", "+"] array', function(){
			var array = calculator.constructEvalString('-',['22', '+']);
			assert.equal(array[1],'-');
			assert.equal(array.length,2);
		});

		it('should return a three item array ["22","-","2"] when I pass in "2" to an ["22", "-"] array', function(){
			var array = calculator.constructEvalString('2', ['22', '-']);
			assert.equal(array[2],'2');
			assert.equal(array.length,3);
		});

		it('should return a three item array ["22","-","22"] when I pass in "2" to an ["22", "-", "2"] array', function(){
			var array = calculator.constructEvalString('2', ['22', '-', '2']);
			assert.equal(array[2],'22');
			assert.equal(array.length,3);
		});
	});

	describe('getResult', function(){
		it('should return an evaluated string for passed in array ["2","+","2","-","2"]', function(){
			var array = ['2','+','2','-','2'];
			assert.equal(calculator.getResult(array), 2);
		});

		it('should return an evaluated string for passed in array ["+","2","-","2"]', function(){
			var array = ['+','2','-','2'];
			assert.equal(calculator.getResult(array), 0);
		});

		it('should return an evaluated string for passed in array ["+","2","-"]', function(){
			var array = ['+','2','-'];
			assert.equal(calculator.getResult(array), 2);
		});
	});

	describe('getScreenValue', function(){
		it('should perform 1+1 = 2', function(){
			assert.equal(calculator.getScreenValue('1'), '1');
			assert.equal(calculator.getScreenValue('+'), '1 +');
			assert.equal(calculator.getScreenValue('1'), '1 + 1');
			assert.equal(calculator.getScreenValue('='), '2');
		});

		it('should perform 0.1 + 0.2 = 0.3', function(){
			assert.equal(calculator.getScreenValue('.'), '.');
			assert.equal(calculator.getScreenValue('1'), '.1');
			assert.equal(calculator.getScreenValue('+'), '.1 +');
			assert.equal(calculator.getScreenValue('.'), '.1 + .');
			assert.equal(calculator.getScreenValue('2'), '.1 + .2');
			assert.equal(calculator.getScreenValue('='), '0.3');
		});

		it('should return empty string when key entered is AC', function(){
			assert.equal(calculator.getScreenValue('AC'), '');
		});
	});

});