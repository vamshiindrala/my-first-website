var todoList = [];
var todoItem;

document.querySelector('#todoInput').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (( key == 13 ) && ( document.querySelector('#todoInput').value.length > 0 )) // 13 is enter
    	addAction( this.value.trim() );
});

function addAction(todoItem){
	//var todoItem = document.getElementById("todoInput").value;
	todoList = addToDo(todoItem, todoList);
	document.getElementById("output").innerHTML = buildListHTML(todoList);
	document.getElementById("todoInput").value = '';
}

function removeAction(index){
	todoList = removeToDo(index, todoList);
	document.getElementById("output").innerHTML = buildListHTML(todoList);
}

function doneAction(index){
	todoList = markToDoAsDone(index, todoList);
	document.getElementById("output").innerHTML = buildListHTML(todoList);
}

function undoAction(index){
	todoList = markToDoAsUnDone(index, todoList);
	document.getElementById("output").innerHTML = buildListHTML(todoList);
}

function editAction(index, e){
	// console.log(e.target);
	e.target.parentElement.innerHTML = getEditHTML(index, todoList[index].task);
}
function saveAction(index, e){
	console.log(e.target);
	var newTask = document.getElementById("newTask").value;
	todoList[index].task = newTask;
	document.getElementById("output").innerHTML = buildListHTML(todoList);
}   