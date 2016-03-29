var assert = require('assert');
var calculator = require('../js/calculator.js');
describe('calculator', function() {
	describe('OperatorSequencetes', function(){
		it('Should return Enter Valid Operation when my passed token is a invalid operation', function(){
			assert.equal(calculator.OperatorSequencetest("12++12"), 'Enter Valid OPeration');
		});
	});
		
});

// describe('constructEvalString', function(){
// 	it('Should return a single item array with value 2 when i pass in 2 to an empty array', function(){
// 		var array = calculator.constructEvalString('2',[]);
// 		assert.equal(array[0],'2');
// 		assert.equal(array.length, 1);
// 	});
// 	it('Should return a single item array with value 22 when i pass in 2 to an ["2"] array', function(){
// 		var array = calculator.constructEvalString('2',['2']);
// 		assert.equal(array[0],'22');
// 		assert.equal(array.length, 1);
// 	});
// 	it('Should return a two item array with value ["22", "+"] when i pass in "+" to an ["22"] array', function(){
// 		var array = calculator.constructEvalString('+',['22']);
// 		assert.equal(array[1],'+');
// 		assert.equal(array.length, 2);
// 	});
// 	it('Should return a two item array with value["22", "+"] when i pass in "+" to an ["22", "+"] array', function(){
// 		var array = calculator.constructEvalString('+',['22','+']);
// 		assert.equal(array[1],'+');
// 		assert.equal(array.length, 2);
// 	});
// 	it('Should return a two item array with value ["22", "-"] when i pass in "-" to an ["22","+"] array', function(){
// 		var array = calculator.constructEvalString('-',['22','+']);
// 		assert.equal(array[1],'-');
// 		assert.equal(array.length, 2);
// 	});
// 	it('Should return a three item array with value ["22", "-","2"] when i pass in "2" to an ["22","-"] array', function(){
// 		var array = calculator.constructEvalString('2',['22','-']);
// 		assert.equal(array[1],'-');
// 		assert.equal(array.length, 3);
// 	});
// 	it('Should return a three item array with value ["22", "-", "22"] when i pass in "2" to an ["22","-","2"] array', function(){
// 		var array = calculator.constructEvalString('2',['22','-','2']);
// 		assert.equal(array[2],'22');
// 		assert.equal(array.length, 3);
// 	});

// });