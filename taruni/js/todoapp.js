
var todoList = [];
var document = document || null;
if(document) {
	var addtask = document.getElementById("btnAdd");
	addtask.onclick = function(){
		var taskboxtext = document.getElementById("taskbox");
		var itemText = taskboxtext.value;
		if(itemText == "" || itemText ==" ") {
			return false;
		}
		var addedList = [];
		addedList = addToDo(itemText,todoList);
		var html = buildListHTML(addedList);
		document.getElementById("todolist").innerHTML = html;
		taskboxtext.focus();
		taskboxtext.value = "";
	};

	function removeAction(index) {
		todoList = removeToDo(index, todoList);
		document.getElementById("todolist").innerHTML = buildListHTML(todoList);
	}

	function doneAction(index) {
		todoList = markToDoAsDone(index, todoList);
		document.getElementById("todolist").innerHTML = buildListHTML(todoList);
	}

	function undoAction(index) {
		todoList = markToDoAsUnDone(index, todoList);
		document.getElementById("todolist").innerHTML = buildListHTML(todoList);
	}

	function editAction(index, e) {
	e.target.parentElement.innerHTML = getEditHTML(index, todoList[index].task);
	}

	function getEditHTML(index, todoItemTask) {
	var html = '<input type="text" value="'+todoItemTask+'"><button onclick="saveAction('+index+',event)">Save</button>';
	return html;
	}

	function saveAction(index,e) {
	var todoItemTask = e.target.previousElementSibling.value;
	if(todoItemTask) {
		todoList = editToDo(index, todoItemTask, todoList);
		document.getElementById("todolist").innerHTML = buildListHTML(todoList);
	}
	}

}

/**Testable Functions of Todo Application**/

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
	index = parseInt(index);
	if(todoItemTask && todoList && todoList.length > 0 && !isNaN(index) && index >= 0){
		todoList[index].task = todoItemTask;
		todoList[index].date = (new Date()).getTime();
		return todoList;
	}
	return false;
}

function markToDoAsDone(index, todoList) {
	index = parseInt(index);
	if(todoList && todoList.length > 0 && !isNaN(index) && index >= 0){
		todoList[index]['status'] = 'Done';
		todoList[index]['date'] = (new Date()).getTime();
		return todoList;
	}
	return false;
}

function markToDoAsUnDone(index, todoList) {
	index = parseInt(index);
	if(todoList && todoList.length > 0 && !isNaN(index) && index >= 0){
		todoList[index]['status'] = 'Incomplete';
		todoList[index]['date'] = (new Date()).getTime();
		return todoList;
	}
	return false;
}

// function getToDoList() {
// 	for(var i=0;i<todoList.length;i++){
// 		console.log(" Task No: "+ i +" Status: "+todoList[i]['status']+" Task Name: "+todoList[i]['task']);
// 	}
// }

// function saveToDoList() {
// }

function buildListHTML(todoList) {
	var html = ''; 
	if(todoList && todoList.length > 0){
		html = '<ul>';
		for(var i=0; i<todoList.length; i++) {
			if(todoList[i].status === 'Done'){
				html += '<li><button class="undone" onclick="undoAction('+i+')">&#10004;</button>'+
				'<span class="strike-through">' + todoList[i].task + '</span>'+
				'<button class="remove" onclick="removeAction('+i+')">Clear</button>'+
				'<button class="edit" onclick="editAction('+i+',event)">Edit</button></li>';
			}else{
				html += '<li><button class="done" onclick="doneAction('+i+')">&#10004;</button>'+
				'<span>' + todoList[i].task + '</span>'+
				'<button class="remove" onclick="removeAction('+i+')">Clear</button>'+
				'<button class="edit" onclick="editAction('+i+',event)">Edit</button></li>';
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
	exports.markToDoAsUnDone = markToDoAsUnDone;
	exports.buildListHTML = buildListHTML;
	exports.getEditHTML = getEditHTML;
}
