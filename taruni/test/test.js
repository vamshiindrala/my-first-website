var assert = require('assert');
var fibonacci = require('../js/script.js');
var calculator = require('../js/calc.js');
var todo = require('../js/todoapp.js');

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

describe('Todo', function() {
	describe('buildToDoItem', function () {
		it('should take a string an return an object', function () {
			var todoItem = todo.buildToDoItem('Learn Html');
			assert.equal(todoItem.task,"Learn Html");
			assert.equal(todoItem.status,"Incomplete");
			assert.equal(typeof todoItem.date,"number");
		});
		it('should take an empty string an return null', function () {
			var todoItem = todo.buildToDoItem('');
			assert.equal(todoItem,null);
		});
		it('should take undefined or null string an return null', function () {
			var todoItem = todo.buildToDoItem();
			assert.equal(todoItem,null);
		});
	});
		describe('addToDo(todoItemTask)', function () {
		it('should add the todo task to the todoList Array', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			assert.equal(todoList.length, 1);
		});

		it('should add 2 todo tasks to the todoList Array', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			todoList = todo.addToDo('Oil Change', todoList);
			assert.equal(todoList.length, 2);
		});

		it('should return false when task is undefined', function() {
			var todoList = todo.addToDo();
			assert.equal(todoList, false);
		});
	});

	describe('removeToDo(index)', function () {
		it('should remove the todo task from the todoList Array', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			todoList = todo.removeToDo(0, todoList);
			assert.equal(todoList.length, 0);
		});

		it('should remove 2 todo item from the todoList Array', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			todoList = todo.addToDo('Oil Change', todoList);
			todoList = todo.removeToDo(1, todoList);
			assert.equal(todoList.length, 1);
		});

		it('should return false when task is undefined', function() {
			var todoList = todo.removeToDo();
			assert.equal(todoList, false);
		});
	});

	describe('editToDo', function () {
		it('should remove the todo task from the todoList Array and replace with new todotask at the index position', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			console.log(todoList[0]['task']);
			todoList = todo.editToDo(0,"Buy Chocolates",todoList);
			assert.equal(todoList.length, 1);
			assert.equal(todoList[0]['task'],"Buy Chocolates");
			console.log(todoList.length);
			console.log(todoList[0]['task']);
		});
		it('should remove the todo task from the todoList Array and replace with new todotask at the index position', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			todoList = todo.addToDo('Oil Change', todoList);
			console.log(todoList[1]['task']);
			todoList = todo.editToDo(1,"Buy Chocolates",todoList);
			assert.equal(todoList.length, 2);
			assert.equal(todoList[1]['task'],"Buy Chocolates");
			console.log(todoList.length);
			console.log(todoList[1]['task']);
		});
		it('should remove the todo task from the todoList Array and replace with new todotask at the index position', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			todoList = todo.addToDo('Oil Change', todoList);
			todoList = todo.addToDo('Learn Html', todoList);
			todoList = todo.addToDo('Learn CSS', todoList);
			todoList = todo.addToDo('Learn Jquery', todoList);
			console.log(todoList[3]['task']);
			todoList = todo.editToDo(3,"Learn JS",todoList);
			assert.equal(todoList.length, 5);
			assert.equal(todoList[3]['task'],"Learn JS");
			console.log(todoList.length);
			console.log(todoList[3]['task']);
		});
		
	});

	describe('markToDoAsDone', function () {
		it('should update the task status to Done from the Incomplete status at the index position', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			todoList = todo.addToDo('Oil Change', todoList);
			todoList = todo.addToDo('Learn Html', todoList);
			todoList = todo.addToDo('Learn CSS', todoList);
			todoList = todo.addToDo('Learn Jquery', todoList);
			assert.equal(todoList[0]['status'],"Incomplete");
			console.log(todoList[0]['status']);
			todoList = todo.markToDoAsDone(0,todoList);
			assert.equal(todoList[0]['status'],"Done");
			console.log(todoList[0]['status']);

		});
	});

	describe('buildListHTML', function () {
		it('should print the task with class as strike-through if status is Done', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			todoList = todo.markToDoAsDone(0,todoList);
			var todohtml  = todo.buildListHTML(todoList);
			console.log(todohtml);
			assert.equal(todohtml,'<ul><li><input type="checkbox" id="0"><span class="strike-through">Buy Milk</span><button class="remove" id="0">x</button></li></ul>');

		});
		it('should print the tasks with class as strike-through if status is Done', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			todoList = todo.addToDo('Learn Html', todoList);
			todoList = todo.markToDoAsDone(0,todoList);
			var todohtml  = todo.buildListHTML(todoList);
			console.log(todohtml);
			assert.equal(todohtml,'<ul><li><input type="checkbox" id="0"><span class="strike-through">Buy Milk</span><button class="remove" id="0">x</button></li><li><input type="checkbox" id="1"><span>Learn Html</span><button class="remove" id="1">x</button></li></ul>');

		});
		it('should print the tasks with class as strike-through if status is Done', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			todoList = todo.addToDo('Learn Html', todoList);
			todoList = todo.markToDoAsDone(1,todoList);
			todoList = todo.markToDoAsDone(0,todoList);
			var todohtml  = todo.buildListHTML(todoList);
			console.log(todohtml);
			assert.equal(todohtml,'<ul><li><input type="checkbox" id="0"><span class="strike-through">Buy Milk</span><button class="remove" id="0">x</button></li><li><input type="checkbox" id="1"><span class="strike-through">Learn Html</span><button class="remove" id="1">x</button></li></ul>');

		});

		it('should print the task without class as strike-through if status is Incomplete', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			var todohtml  = todo.buildListHTML(todoList);
			console.log(todohtml);
			assert.equal(todohtml,'<ul><li><input type="checkbox" id="0"><span>Buy Milk</span><button class="remove" id="0">x</button></li></ul>');
		});

		it('should print the tasks with class as strike-through if status is Done', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			todoList = todo.addToDo('Learn Html', todoList);
			var todohtml  = todo.buildListHTML(todoList);
			console.log(todohtml);
			assert.equal(todohtml,'<ul><li><input type="checkbox" id="0"><span>Buy Milk</span><button class="remove" id="0">x</button></li><li><input type="checkbox" id="1"><span>Learn Html</span><button class="remove" id="1">x</button></li></ul>');

		});
	});
});
