var assert = require('assert');
var fibonacci = require('../js/script.js');
var calculator = require('../js/calc.js');

//Fibonacci Mocha Tests
describe('Fibonacci', function() {
	describe('getFibonacci(n)', function () {

		it('should return [0] when n is 1', function () {
			assert.equal([0].length,fibonacci.getFibonacci(1).length);
			assert.equal('0',fibonacci.getFibonacci(1).join(','));
			assert.equal(0,fibonacci.getFibonacci(1)[0]);
		});

		it('should return [0,1] when n is 2', function () {
			assert.equal([0,1].length,fibonacci.getFibonacci(2).length);
			assert.equal('0,1',fibonacci.getFibonacci(2).join(','));
			assert.equal(1,fibonacci.getFibonacci(2)[1]);
		});

		it('should return [0,1,1] when n is 3', function () {
			assert.equal([0,1,1].length,fibonacci.getFibonacci(3).length);
			assert.equal('0,1,1',fibonacci.getFibonacci(3).join(','));
			assert.equal(1,fibonacci.getFibonacci(3)[2]);
		});

		it('should return [0,1,1,2] when n is 4', function () {
			assert.equal([0,1,1,2].length,fibonacci.getFibonacci(4).length);
			//assert.equal('0,1,1,2',fibonacci.getFibonacci(4).join(','));
			assert.equal(2,fibonacci.getFibonacci(4)[3]);
		});

		it('should return [0,1,1,2,3] when n is 5', function () {
			assert.equal([0,1,1,2,3].length,fibonacci.getFibonacci(5).length);
			//assert.equal('0,1,1,2,3',fibonacci.getFibonacci(5).join(','));
			assert.equal(3,fibonacci.getFibonacci(5)[4]);
		});

		it('should return [0,1,1,2,3,5] when n is 6', function () {
			assert.equal([0,1,1,2,3,5].length,fibonacci.getFibonacci(6).length);
			//assert.equal('0,1,1,2,3',fibonacci.getFibonacci(5).join(','));
			assert.equal(5,fibonacci.getFibonacci(6)[5]);
		});

		it('should return ["You have an invalid number. Please specify a integer > 0"] when n is 0', function () {
			assert.equal('You have an invalid number. Please specify a integer > 0',fibonacci.getFibonacci(0)[0]);
		});

		it('should return ["You have an invalid number. Please specify a integer > 0"] when n is null', function () {
			assert.equal('You have an invalid number. Please specify a integer > 0',fibonacci.getFibonacci(null)[0]);
		});

		it('should return ["You have an invalid number. Please specify a integer > 0"] when n is undefined', function () {
			assert.equal('You have an invalid number. Please specify a integer > 0',fibonacci.getFibonacci(undefined)[0]);
		});

		it('should return ["You have an invalid number. Please specify a integer > 0"] when n is hjjhds', function () {
			assert.equal('You have an invalid number. Please specify a integer > 0',fibonacci.getFibonacci('hjjhds')[0]);
		});

		it('should return ["You have an invalid number. Please specify a integer > 0"] when n is ""', function () {
			assert.equal('You have an invalid number. Please specify a integer > 0',fibonacci.getFibonacci("")[0]);
		});

	});
describe('printHtml(limit)',function(){
	it('should return 0<br/> when n is 1',function(){
		assert.equal('0<br/>',fibonacci.printHtml(1));
	});

	it('should return 0<br/>1<br/> when n is 2',function(){
		assert.equal('0<br/>1<br/>',fibonacci.printHtml(2));
	});

	it('should return 0<br/>1<br/>1<br/> when n is 3',function(){
		assert.equal('0<br/>1<br/>1<br/>',fibonacci.printHtml(3));
	});

	it('should return 0<br/>1<br/>1<br/>2<br/> when n is 4',function(){
		assert.equal('0<br/>1<br/>1<br/>2<br/>',fibonacci.printHtml(4));
	});

	it('should return 0<br/>1<br/>1<br/>2<br/>3<br/> when n is 5',function(){
		assert.equal('0<br/>1<br/>1<br/>2<br/>3<br/>',fibonacci.printHtml(5));
	});

	it('should return ["You have an invalid number. Please specify a integer > 0"] when n is 0', function () {
		assert.equal("<div style = 'color:red' >You have an invalid number. Please specify a integer > 0</div><br/>",fibonacci.printHtml(0));
	});

	it('should return ["You have an invalid number. Please specify a integer > 0"] when n is null', function () {
		assert.equal("<div style = 'color:red' >You have an invalid number. Please specify a integer > 0</div><br/>",fibonacci.printHtml(null));
	});

	it('should return ["You have an invalid number. Please specify a integer > 0"] when n is undefined', function () {
		assert.equal("<div style = 'color:red' >You have an invalid number. Please specify a integer > 0</div><br/>",fibonacci.printHtml(undefined));
	});

	it('should return ["You have an invalid number. Please specify a integer > 0"] when n is abcxyz', function () {
		assert.equal("<div style = 'color:red' >You have an invalid number. Please specify a integer > 0</div><br/>",fibonacci.printHtml("abcxyz"));
	});

	it('should return ["You have an invalid number. Please specify a integer > 0"] when n is ""', function () {
		assert.equal("<div style = 'color:red' >You have an invalid number. Please specify a integer > 0</div><br/>",fibonacci.printHtml(""));
		});
	});	
});
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