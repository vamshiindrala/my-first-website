var assert = require('assert');
var todoApp = require('../js/todo1.js');
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
		it('should edit a particular todo task from the todoList Array when selected', function() {
			var todoList = todoApp.addToDo('Buy Milk', []);
			todoList = todoApp.addToDo('Attend Meeting', todoList);
			todoList = todoApp.editToDo(1, 'Attend meeting and finish task', todoList);
			assert.equal(todoList[1]['task'], 'Attend meeting and finish task');
		});	
		it('should return false when task is undefined', function() {
			var todoList = todoApp.editToDo();
			assert.equal(todoList, false);
		});
	});

	describe('markToDoAsDone', function () {
		it('the status of the task should be marked as done when the task is completed', function(){
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
	describe('markToDoAsUnDone', function () {
		it('the status of the task should be marked as done when the task is completed', function(){
			var todoList = todoApp.addToDo('Buy Milk', []);
			todoList = todoApp.addToDo('Attend Meeting', todoList);
			todoList = todoApp.markToDoAsUnDone(1, todoList);
			assert.equal(todoList[1]['status'], 'Incomplete');

		});
		it('should return false when task is undefined', function() {
			var todoList = todoApp.markToDoAsUnDone();
			assert.equal(todoList, false);
		});
	});

	describe('buildListHTML', function () {
		it('should return html list which is built', function() {
			var todoList = todoApp.addToDo('Buy Milk', []);
			todoList = todoApp.addToDo('Attend meeting', todoList);
			todoList = todoApp.addToDo('Complete your task', todoList);
			var buildList = todoApp.buildListHTML(todoList);
			assert.equal(buildList,'<ul><li class="taskList"><button class="done" onclick="doneAction(0)">&#10004;</button><span class="taskName">Buy Milk</span><button class="remove" onclick="removeAction(0)">&#10008;</button><button class="edit" onclick="editAction(0, event)">&#9998;</button></li><li class="taskList"><button class="done" onclick="doneAction(1)">&#10004;</button><span class="taskName">Attend meeting</span><button class="remove" onclick="removeAction(1)">&#10008;</button><button class="edit" onclick="editAction(1, event)">&#9998;</button></li><li class="taskList"><button class="done" onclick="doneAction(2)">&#10004;</button><span class="taskName">Complete your task</span><button class="remove" onclick="removeAction(2)">&#10008;</button><button class="edit" onclick="editAction(2, event)">&#9998;</button></li></ul>');	
		});
		it('should return proper html list which is built when the status of the task is marked as done', function() {
			var todoList = todoApp.addToDo('Buy Milk', []);
			todoList = todoApp.addToDo('Attend meeting', todoList);
			todoList = todoApp.addToDo('Complete your task', todoList);
			var buildList = todoApp.buildListHTML(todoList);
			assert.equal(buildList,'<ul><li class="taskList"><button class="done" onclick="doneAction(0)">&#10004;</button><span class="taskName">Buy Milk</span><button class="remove" onclick="removeAction(0)">&#10008;</button><button class="edit" onclick="editAction(0, event)">&#9998;</button></li><li class="taskList"><button class="done" onclick="doneAction(1)">&#10004;</button><span class="taskName">Attend meeting</span><button class="remove" onclick="removeAction(1)">&#10008;</button><button class="edit" onclick="editAction(1, event)">&#9998;</button></li><li class="taskList"><button class="done" onclick="doneAction(2)">&#10004;</button><span class="taskName">Complete your task</span><button class="remove" onclick="removeAction(2)">&#10008;</button><button class="edit" onclick="editAction(2, event)">&#9998;</button></li></ul>');
			todoList = todoApp.markToDoAsDone(1, todoList);
			buildList = todoApp.buildListHTML(todoList);	
			assert.equal(buildList,'<ul><li class="taskList"><button class="done" onclick="doneAction(0)">&#10004;</button><span class="taskName">Buy Milk</span><button class="remove" onclick="removeAction(0)">&#10008;</button><button class="edit" onclick="editAction(0, event)">&#9998;</button></li><li class="taskList"><button class="undo" onclick="undoAction(1)">&#10004;</button><span class="strike-through taskName">Attend meeting</span><button class="remove" onclick="removeAction(1)">&#10008;</button><button class="edit" onclick="editAction(1, event)">&#9998;</button></li><li class="taskList"><button class="done" onclick="doneAction(2)">&#10004;</button><span class="taskName">Complete your task</span><button class="remove" onclick="removeAction(2)">&#10008;</button><button class="edit" onclick="editAction(2, event)">&#9998;</button></li></ul>');
		});
		
	});
	describe('getEditHTML', function () {
		it('should provide an input box with save button when edit button of a paticular task is  clicked', function() {
			var todoList = todoApp.addToDo('Buy Milk', []);
			todoList = todoApp.addToDo('Attend meeting', todoList);
			var editHTML = todoApp.getEditHTML(1,'Finish Task');
			assert.equal(editHTML,'<input id="newTask" type="text" value="Finish Task"> <button onclick="saveAction(1, event)">&#128190;</button>');
		});
	});

});