//Add a todo item

var todoList = [];

function addToDo(todoItemTask) {
	var todoList = todoList || [],
		todoItem;

	todoItem = buildToDoItem(todoItemTask);
	if(todoItem){
		todoList.push(todoItem);
		return todoList;
	}
	return false;
}



function buildToDoItem(todoItemTask){
	if(todoItemTask && typeof todoItemTask === 'string') {
		var todoItem = {};
		todoItem.task = todoItemTask;
		todoItemTask.status = 'Incomplete';
		todoItemTask.date = (new Date()).getTime();
		return todoItemTask;
	}
	return null;
}

function editToDo(index, todoItem) {
	//comparision logic

}

function removeToDo(index) {

}

function markToDoAsDone(index) {

}

function getToDoList() {
	//calls to backend
	todoList = [];
}

function saveToDoList() {

}

