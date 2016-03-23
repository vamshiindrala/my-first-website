var assert = require('assert');
var fibonacci = require('../js/exercise1.js');
describe('Fibonacci', function() {
	describe('getFibonacci(n)', function () {

		it('should return [0] when n is 1', function () {
			assert.equal([0].length, fibonacci.getFibonacci(1).length);
			assert.equal(0, fibonacci.getFibonacci(1)[0]);
		});
		it('should return [0,1] when n is 2', function () {
			assert.equal([0,1].length, fibonacci.getFibonacci(2).length);
			assert.equal(1, fibonacci.getFibonacci(2)[1]);
		});
		it('should return [0,1,1] when n is 3', function () {
			assert.equal([0,1,1].length, fibonacci.getFibonacci(3).length);
			assert.equal(1, fibonacci.getFibonacci(3)[2]);
		});
		it('should return [0,1,1,2] when n is 4', function () {
			assert.equal([0,1,1,2].length, fibonacci.getFibonacci(4).length);
			assert.equal(2, fibonacci.getFibonacci(4)[3]);
		});
		it('should return [0,1.1,2,3] when n is 5', function () {
			assert.equal([0,1,1,2,3].length, fibonacci.getFibonacci(5).length);
			assert.equal(3, fibonacci.getFibonacci(5)[4]);
		});
		it('should return ["You have entered an invalid input. Please specify an integer > 0"] when n is 0', function () {
			assert.equal("You have entered an invalid input. Please specify an integer > 0", fibonacci.getFibonacci(0)[0]);
		});
		it('should return ["You have entered an invalid input. Please specify an integer > 0"] when n is invalid', function () {
			assert.equal("You have entered an invalid input. Please specify an integer > 0", fibonacci.getFibonacci("abc")[0]);
		});
		it('should return ["You have entered an invalid input. Please specify an integer > 0"] when n is empty string', function () {
			assert.equal("You have entered an invalid input. Please specify an integer > 0", fibonacci.getFibonacci("")[0]);
		});
		it('should return ["You have entered an invalid input. Please specify an integer > 0"] when n is null', function () {
			assert.equal("You have entered an invalid input. Please specify an integer > 0", fibonacci.getFibonacci(null)[0]);
		});	
		it('should return ["You have entered an invalid input. Please specify an integer > 0"] when n is undefined', function () {
			assert.equal("You have entered an invalid input. Please specify an integer > 0", fibonacci.getFibonacci(undefined)[0]);
		});
	});

	describe('getFibonacciSequence', function(){
		it('Fibonacci sequence should return 0<br/> when n is 1', function () {
			assert.equal('0<br/>', fibonacci.getFibonacciSequence(1));
		});
		it('Fibonacci sequence should return 0<br/>1<br/> when n is 2', function () {
			assert.equal('0<br/>1<br/>', fibonacci.getFibonacciSequence(2));
		});
		it('Fibonacci sequence should return 0<br/>1<br/>1<br/> when n is 3', function () {
			assert.equal('0<br/>1<br/>1<br/>', fibonacci.getFibonacciSequence(3));
		});
		it('Fibonacci sequence should return 0<br/>1<br/>1<br/>2<br/> when n is 4', function () {
			assert.equal('0<br/>1<br/>1<br/>2<br/>', fibonacci.getFibonacciSequence(4));
		});
		it('Fibonacci sequence should return 0<br/>1<br/>1<br/>2<br/>3<br/> when n is 5', function () {
			assert.equal('0<br/>1<br/>1<br/>2<br/>3<br/>', fibonacci.getFibonacciSequence(5));
		});
		it('should return [You have entered an invalid input. Please specify an integer > 0</div><br/>] when n is 0', function () {
			assert.equal("<div style='color:red'>You have entered an invalid input. Please specify an integer > 0</div><br/>", fibonacci.getFibonacciSequence(0));
		});
		it('should return [You have entered an invalid input. Please specify an integer > 0</div><br/>] when n is null', function () {
			assert.equal("<div style='color:red'>You have entered an invalid input. Please specify an integer > 0</div><br/>", fibonacci.getFibonacciSequence(null));
		});
		it('should return [You have entered an invalid input. Please specify an integer > 0</div><br/>] when n is invalid', function () {
			assert.equal("<div style='color:red'>You have entered an invalid input. Please specify an integer > 0</div><br/>", fibonacci.getFibonacciSequence("abc"));
		});
		it('should return [You have entered an invalid input. Please specify an integer > 0</div><br/>] when n is undefined', function () {
			assert.equal("<div style='color:red'>You have entered an invalid input. Please specify an integer > 0</div><br/>", fibonacci.getFibonacciSequence(undefined));
		});
		it('should return [You have entered an invalid input. Please specify an integer > 0</div><br/>] when n is empty string', function () {
			assert.equal("<div style='color:red'>You have entered an invalid input. Please specify an integer > 0</div><br/>", fibonacci.getFibonacciSequence(""));
		});

	});
});