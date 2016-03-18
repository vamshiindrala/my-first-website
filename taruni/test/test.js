var assert = require('assert');
var fibonacci = require('../js/script.js');
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
});	
});