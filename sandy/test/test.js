var assert = require('assert');
var calculator = require('../js/calcy.js');
describe('Calculator', function() {

	describe('isTokenAnOperator', function (){

		it('should return true when my passed token is an operator', function () {
			assert.equal(calculator.isTokenAnOperator('+'),true);
		});
		it('should return false when my passed token is a not an operator', function () {
			assert.equal(calculator.isTokenAnOperator('1'),false);
		});
		it('should return false when my passed token is null or undefined', function () {
			assert.equal(calculator.isTokenAnOperator(undefined),false);
		});
	});
	describe('constructEvalString', function(){
		 it('Should return a single item array with value 2 when i pass in 2 to an empty array', function(){
		  var array = calculator.constructEvalString('2',[]);
		  assert.equal(array[0],'2');
		  assert.equal(array.length, 1);
		 });
		 it('Should return a single item array with value 22 when i pass in 2 to an ["2"] array', function(){
		  var array = calculator.constructEvalString('2',['2']);
		  assert.equal(array[0],'22');
		  assert.equal(array.length, 1);
		 });
		 it('Should return a two item array with value ["22", "+"] when i pass in "+" to an ["22"] array', function(){
		  var array = calculator.constructEvalString('+',['22']);
		  assert.equal(array[1],'+');
		  assert.equal(array.length, 2);
		 });
		 it('Should return a two item array with value["22", "+"] when i pass in "+" to an ["22", "+"] array', function(){
		  var array = calculator.constructEvalString('+',['22','+']);
		  assert.equal(array[1],'+');
		  assert.equal(array.length, 2);
		 });
		 it('Should return a two item array with value ["22", "-"] when i pass in "-" to an ["22","+"] array', function(){
		  var array = calculator.constructEvalString('-',['22','+']);
		  assert.equal(array[1],'-');
		  assert.equal(array.length, 2);
		 });
		 it('Should return a three item array with value ["22", "-","2"] when i pass in "2" to an ["22","-"] array', function(){
		  var array = calculator.constructEvalString('2',['22','-']);
		  assert.equal(array[1],'-');
		  assert.equal(array.length, 3);
		 });
		 it('Should return a three item array with value ["22", "-", "22"] when i pass in "2" to an ["22","-","2"] array', function(){
		  var array = calculator.constructEvalString('2',['22','-','2']);
		  assert.equal(array[2],'22');
		  assert.equal(array.length, 3);
		 });

	});
	describe('getResult', function (){

		it('should return an evaluated string for passed in array ["2","+","2","*","2"]', function () {
			var array = ["2","+","2","*","2"];
			assert.equal(calculator.getResult(array), 6);
		});
	});
});