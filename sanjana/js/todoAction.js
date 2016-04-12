var todoList = initTodoList() || [];
var todoItem;

document.querySelector('#todoInput').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (( key == 13 ) && ( $("#todoInput").val().length > 0 )) // 13 is enter
    	addAction( this.value.trim() );
});

function addAction(todoItem){
	todoList = addToDo(todoItem, todoList);
	$("#output").html(buildListHTML(todoList));
	$("#todoInput").val('');
	saveTodoList()
}

function removeAction(index){
	todoList = removeToDo(index, todoList);
	$("#output").html(buildListHTML(todoList));
	saveTodoList()
}

function doneAction(index){
	todoList = markToDoAsDone(index, todoList);
	$("#output").html(buildListHTML(todoList));
	saveTodoList()
}

function undoAction(index){
	todoList = markToDoAsUnDone(index, todoList);
	$("#output").html(buildListHTML(todoList));
	saveTodoList()
}

function editAction(index, e){
	$(e.target).parent().html(getEditHTML(index, todoList[index].task));
}
function saveAction(index,e) {
	  var todoItemTask =  $(e.target).prev().val();
	  if(todoItemTask) {
		todoList = editToDo(index, todoItemTask, todoList);
		$("#todolist").html(buildListHTML(todoList));
		 saveToDoList();
	  }
	}
function saveAction(index, e){
	var newTask = $("#newTask").val();
	todoList[index].task = newTask;
	$("#output").html(buildListHTML(todoList));
	saveTodoList()
}
function initTodoList(){
	var todoListString = localStorage.getItem('myTodoList');
	if(todoListString !== "undefined"){
		var todos = JSON.parse(todoListString);
		// $("#output").html(buildListHTML(todos));
		document.getElementById("output").innerHTML = buildListHTML(todos);
		return todos;
	}
	return [];
}
function saveTodoList(){
	localStorage.setItem('myTodoList', JSON.stringify(todoList));
}   