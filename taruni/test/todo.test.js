var assert = require('assert');
var todo = require('../js/todoapp.js');

describe('Todo', function() {
	describe('buildToDoItem(todoItemTask)', function () {
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

	describe('editToDo(index, todoItemTask, todoList)', function () {
		it('should remove the todo task from the todoList Array and replace with new todotask at the index position', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			// console.log(todoList[0]['task']);
			todoList = todo.editToDo(0,"Buy Chocolates",todoList);
			assert.equal(todoList.length, 1);
			assert.equal(todoList[0]['task'],"Buy Chocolates");
		});
		it('should remove the todo task from the todoList Array and replace with new todotask at the index position', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			todoList = todo.addToDo('Oil Change', todoList);
			todoList = todo.editToDo(1,"Buy Chocolates",todoList);
			assert.equal(todoList.length, 2);
			assert.equal(todoList[1]['task'],"Buy Chocolates");
		});
		it('should remove the todo task from the todoList Array and replace with new todotask at the index position', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			todoList = todo.addToDo('Oil Change', todoList);
			todoList = todo.addToDo('Learn Html', todoList);
			todoList = todo.addToDo('Learn CSS', todoList);
			todoList = todo.addToDo('Learn Jquery', todoList);
			todoList = todo.editToDo(3,"Learn JS",todoList);
			assert.equal(todoList.length, 5);
			assert.equal(todoList[3]['task'],"Learn JS");
		});
		
	});

	describe('markToDoAsDone(index, todoList)', function () {
		it('should update the task status to Done from the Incomplete status at the index position', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			todoList = todo.addToDo('Oil Change', todoList);
			todoList = todo.addToDo('Learn Html', todoList);
			todoList = todo.addToDo('Learn CSS', todoList);
			todoList = todo.addToDo('Learn Jquery', todoList);
			assert.equal(todoList[0]['status'],"Incomplete");
			todoList = todo.markToDoAsDone(0,todoList);
			assert.equal(todoList[0]['status'],"Done");
		});
		it('should return false when task is undefined', function() {
			var todoList = todo.markToDoAsDone('',[]);
			assert.equal(todoList, false);
		});
	});

	describe('markToDoAsUnDone(index, todoList)', function () {
		it('should update the task status to Incomplete from the Done status at the index position', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			todoList = todo.addToDo('Oil Change', todoList);
			todoList = todo.addToDo('Learn Html', todoList);
			todoList = todo.addToDo('Learn CSS', todoList);
			todoList = todo.addToDo('Learn Jquery', todoList);
			assert.equal(todoList[0]['status'],"Incomplete");
			todoList = todo.markToDoAsDone(0,todoList);
			todoList = todo.markToDoAsUnDone(0,todoList);
			assert.equal(todoList[0]['status'],"Incomplete");

		});
		it('should return false when task is undefined', function() {
			var todoList = todo.markToDoAsUnDone('',[]);
			assert.equal(todoList, false);
		});
	});

	describe('buildListHTML(todoList)', function () {
		it('should print the task with class as strike-through if status is Done', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			todoList = todo.markToDoAsDone(0,todoList);
			var todohtml  = todo.buildListHTML(todoList);
			var html = '<ul><li><button class="undone" onclick="undoAction(0)">&#10004;</button><span class="strike-through">Buy Milk</span><button class="remove" onclick="removeAction(0)">Clear</button><button class="edit" onclick="editAction(0,event)">Edit</button></li></ul>';
			assert.equal(todohtml,html);
		});

		it('should print the task with index 0 with class as strike-through if status is Done and task with index 1 without a class as strike-through', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			todoList = todo.addToDo('Learn Html', todoList);
			todoList = todo.markToDoAsDone(0,todoList);
			var todohtml  = todo.buildListHTML(todoList);
			var html = '<ul><li><button class="undone" onclick="undoAction(0)">&#10004;</button><span class="strike-through">Buy Milk</span><button class="remove" onclick="removeAction(0)">Clear</button><button class="edit" onclick="editAction(0,event)">Edit</button></li><li><button class="done" onclick="doneAction(1)">&#10004;</button><span>Learn Html</span><button class="remove" onclick="removeAction(1)">Clear</button><button class="edit" onclick="editAction(1,event)">Edit</button></li></ul>';
			assert.equal(todohtml,html);
		});
		it('should print the task with index 0 with class as strike-through if status is Done and task with index 1 with a class as strike-through', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			todoList = todo.addToDo('Learn Html', todoList);
			todoList = todo.markToDoAsDone(1,todoList);
			todoList = todo.markToDoAsDone(0,todoList);
			var todohtml  = todo.buildListHTML(todoList);
			var html = '<ul><li><button class="undone" onclick="undoAction(0)">&#10004;</button><span class="strike-through">Buy Milk</span><button class="remove" onclick="removeAction(0)">Clear</button><button class="edit" onclick="editAction(0,event)">Edit</button></li><li><button class="undone" onclick="undoAction(1)">&#10004;</button><span class="strike-through">Learn Html</span><button class="remove" onclick="removeAction(1)">Clear</button><button class="edit" onclick="editAction(1,event)">Edit</button></li></ul>';
			assert.equal(todohtml,html);
		});

		it('should print the task without class as strike-through if status is Incomplete', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			var todohtml  = todo.buildListHTML(todoList);
			var html = '<ul><li><button class="done" onclick="doneAction(0)">&#10004;</button><span>Buy Milk</span><button class="remove" onclick="removeAction(0)">Clear</button><button class="edit" onclick="editAction(0,event)">Edit</button></li></ul>';
			assert.equal(todohtml,html);
		});

		it('should print the task with index 0 without class as strike-through if status is Incomplete and task with index 1 without a class as strike-through if status is Incomplete', function() {
			var todoList = todo.addToDo('Buy Milk', []);
			todoList = todo.addToDo('Learn Html', todoList);
			var todohtml  = todo.buildListHTML(todoList);
			var html = '<ul><li><button class="done" onclick="doneAction(0)">&#10004;</button><span>Buy Milk</span><button class="remove" onclick="removeAction(0)">Clear</button><button class="edit" onclick="editAction(0,event)">Edit</button></li><li><button class="done" onclick="doneAction(1)">&#10004;</button><span>Learn Html</span><button class="remove" onclick="removeAction(1)">Clear</button><button class="edit" onclick="editAction(1,event)">Edit</button></li></ul>';
			assert.equal(todohtml,html);
		});

		it('should not print anything when the task is empty', function() {
			var todoList = todo.addToDo('', []);
			var todohtml  = todo.buildListHTML(todoList);
			var html = '';
			assert.equal(todohtml,html);
		});
  	});

	describe('getEditHTML(index, todoItemTask)', function () {
		it('should return input text box with task name "Buy Milk" and a save button', function() {
			var todohtml = todo.getEditHTML(0,"Buy Milk");
			var html = '<input type="text" value="Buy Milk"><button onclick="saveAction(0,event)">Save</button>'
			assert.equal(todohtml, html);
		});
	});
});