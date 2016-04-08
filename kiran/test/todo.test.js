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
		var todoList = todoApp.addToDo('Buy Milk', []);
		todoList = todoApp.addToDo('Attend Meeting', todoList);

		it('should edit a particular todo task from the todoList Array when selected', function() {
			var newTodoList = todoApp.editToDo(1, 'Attend meeting and finish task', todoList);
			assert.equal(newTodoList[1]['task'], 'Attend meeting and finish task');
		});

		it('should return false when task is empty string', function(){
			var newTodoList = todoApp.editToDo(1, '', todoList);
			assert.equal(newTodoList, false);
		});

		it('should return false when task is undefined', function() {
			var newTodoList = todoApp.editToDo(0, undefined, todoList);
			assert.equal(newTodoList, false);
		});

		it('should return false when todoList is empty or undefined', function() {
			var newTodoList = todoApp.editToDo(0, undefined, undefined);
			assert.equal(newTodoList, false);
		});
	});

	describe('markToDoAsDone', function () {
		it('the status of the task should be marked as done when the task is completed', function(){
			// var todoItem = todoApp.buildToDoItem('Buy Milk');
			// assert.equal(todoItem.task, 'Buy Milk');
			// assert.equal(todoItem.status, 'Incomplete');
			// assert.equal(typeof todoItem.date, 'number');
			var todoList = todoApp.addToDo('Buy Milk', []);
			todoList = todoApp.addToDo('Attend Meeting', todoList);
			todoList = todoApp.markToDoAsDone(1, todoList);
			assert.equal(todoList[1]['status'], 'Done');

		});
		it('should return false when task is undefined', function() {
			var todoList = todoApp.markToDoAsDone();
			assert.equal(todoList, false);
		});
	});

	describe('buildListHTML', function () {
		it('should return html list which is built', function() {
			var todoList = todoApp.addToDo('Buy Milk', []);
			todoList = todoApp.addToDo('Attend meeting', todoList);
			todoList = todoApp.addToDo('Complete your task', todoList);
			var buildList = todoApp.buildListHTML(todoList);
			assert.equal(buildList,'<ul><li><span>Buy Milk</span><button class="remove" id="0">x</button></li><li><span>Attend meeting</span><button class="remove" id="1">x</button></li><li><span>Complete your task</span><button class="remove" id="2">x</button></li></ul>');	
		});
		it('should return proper html list which is built when the status of the task is marked as done', function() {
			var todoList = todoApp.addToDo('Buy Milk', []);
			todoList = todoApp.addToDo('Attend meeting', todoList);
			todoList = todoApp.addToDo('Complete your task', todoList);
			var buildList = todoApp.buildListHTML(todoList);
			assert.equal(buildList,'<ul><li><span>Buy Milk</span><button class="remove" id="0">x</button></li><li><span>Attend meeting</span><button class="remove" id="1">x</button></li><li><span>Complete your task</span><button class="remove" id="2">x</button></li></ul>');
			todoList = todoApp.markToDoAsDone(1, todoList);
			buildList = todoApp.buildListHTML(todoList);
			assert.equal(buildList,'<ul><li><span>Buy Milk</span><button class="remove" id="0">x</button></li><li><span class="strike-through">Attend meeting</span><button class="remove" id="1">x</button></li><li><span>Complete your task</span><button class="remove" id="2">x</button></li></ul>');
		});
		it('should return empty string when todoList is empty', function(){});
	});

});