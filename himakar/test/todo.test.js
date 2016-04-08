var assert = require('assert');
var todoApp = require('../js/todo.js');
describe('Todo', function() {
	describe('buildToDoItem(todoItemTask)', function () {
		it('should take a string and return an object', function(){
			var todoItem = todoApp.buildToDoItem('Buy Milk');
			assert.equal(todoItem.task, 'Buy Milk');
			assert.equal(todoItem.status, 'Incomplete');
			assert.equal(typeof todoItem.date, 'number');
		});

		it('should take a empty string and return null', function(){
			var todoItem = todoApp.buildToDoItem('');
			assert.equal(todoItem, null);
		});

		it('should take undefined or null string and return null', function(){
			var todoItem = todoApp.buildToDoItem();
			assert.equal(todoItem, null);
		});
	});

	describe('addToDo(todoItemTask)', function () {
		it('should add the todo task to the todoList Array', function() {
			var todoList = todoApp.addToDo('Buy Milk', []);
			assert.equal(todoList.length, 1);
		});

		it('should add 2 todo tasks to the todoList Array', function() {
			var todoList = todoApp.addToDo('Buy Milk', []);
			todoList = todoApp.addToDo('Oil Change', todoList);
			assert.equal(todoList.length, 2);
		});

		it('should return false when task is undefined', function() {
			var todoList = todoApp.addToDo();
			assert.equal(todoList, false);
		});
	});

	describe('removeToDo(index)', function () {
		it('should remove the todo task from the todoList Array', function() {
			var todoList = todoApp.addToDo('Buy Milk', []);
			todoList = todoApp.removeToDo(0, todoList);
			assert.equal(todoList.length, 0);
		});

		it('should remove 2 todo item from the todoList Array', function() {
			var todoList = todoApp.addToDo('Buy Milk', []);
			todoList = todoApp.addToDo('Oil Change', todoList);
			todoList = todoApp.removeToDo(1, todoList);
			assert.equal(todoList.length, 1);
		});

		it('should return false when task is undefined', function() {
			var todoList = todoApp.removeToDo();
			assert.equal(todoList, false);
		});
	});

	describe('editToDo', function () {
		it('should edit the todo task from the todoList Array', function() {
			var todoList = todoApp.addToDo('Buy Milk', []);
			todoList = todoApp.addToDo('Oil Change', todoList);
			todoList = todoApp.editToDo(0, 'make money', todoList);
			assert.equal(todoList.length, 2);
		});
		it('should edit the todo task from the todoList Array', function() {
			var todoList = todoApp.addToDo('Buy Milk', []);
			todoList = todoApp.addToDo('Oil Change', todoList);
			todoList = todoApp.editToDo(1, 'make money', todoList);
			assert.equal(todoList.length, 2);
		});
		it('should return false todoList Array', function() {
			var todoList = todoApp.addToDo('Buy Milk', []);
			todoList = todoApp.addToDo('Oil Change', todoList);
			todoList = todoApp.editToDo();
			assert.equal(todoList, false);
		});
	});

	describe('markToDoAsDone', function () {
		it('should mark the todo task from the todoList Array as done', function() {
			var todoList = todoApp.addToDo('Buy Milk', []);
			todoList = todoApp.addToDo('Oil Change', todoList);
			var result = todoApp.markToDoAsDone(0, todoList, 'Buy Milk');
			assert.equal(result, 'red');
		});
		it('should mark the todo task from the todoList Array as done', function() {
			var todoList = todoApp.addToDo('Buy Milk', []);
			todoList = todoApp.addToDo('Oil Change', todoList);
			var result = todoApp.markToDoAsDone(1, todoList, 'Brakes');
			assert.equal(result, false);
		});	
	});

	describe('buildListHTML', function () {
		
	});

});