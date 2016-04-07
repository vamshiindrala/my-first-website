//Add a todo item

var todoList = [];

function addToDo(todoItemTask, todoList) {
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
		todoItem.status = 'Incomplete';
		todoItem.date = (new Date()).getTime();
		return todoItem;
	}
	return null;
}

function removeToDo(index, todoList) {
	index = parseInt(index);
	if(todoList && todoList.length > 0 && !isNaN(index) && index >= 0){
		todoList.splice(index, 1);
		return todoList;
	}
	return false;
}

function editToDo(index, todoItemTask, todoList) {

}

function markToDoAsDone(index, todoList) {

}

// function getToDoList() {

// }

// function saveToDoList() {

// }

 
function buildListHTML(todoList) {
	var html = ''; 
 	if(todoList && todoList.length > 0){
	    html = '<ul>';
	    for(var i=0; i<todoList.length; i++) {
	    	if(todoList[i].status === 'Done'){
	    		html += '<li><span class="strike-through">' + todoList[i].task + '</span><button class="remove" id="' + i  + '">x</button></li>';
	    	}else{
	    		html += '<li><span>' + todoList[i].task + '</span><button class="remove" id="' + i  + '">x</button></li>';
	    	}	        
	    };
	    html += '</ul>';
 	}
    return html;
}

if (typeof module !== 'undefined' && module.exports != null){
  exports.buildToDoItem = buildToDoItem;
  exports.addToDo = addToDo;
  exports.removeToDo = removeToDo;
  exports.editToDo = editToDo;
  exports.markToDoAsDone = markToDoAsDone;
  exports.buildListHTML = buildListHTML;
}
