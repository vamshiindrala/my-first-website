var todoList = initTodoList();

function initTodoList(){
	var todoListString = localStorage.getItem('mytodoList');
	if(todoListString !== "undefined") {
		var todos = JSON.parse(todoListString);
		document.getElementById("todolist").innerHTML = buildListHTML(todos);
		// $("#todolist").html(buildListHTML(todos));
		return todos;
	}
	return [];
}

function saveToDoList() {
	localStorage.setItem('mytodoList',JSON.stringify(todoList));
}
	function addAction() {
		var taskboxtext = $("#taskbox").val();
		todoList = addToDo(taskboxtext,todoList);
		$("#todolist").html(buildListHTML(todoList));
		$("#taskbox").focus();
		$("#taskbox").val("");
		saveToDoList();
	}
	function removeAction(index) {
		todoList = removeToDo(index, todoList);
		$("#todolist").html(buildListHTML(todoList));
		 saveToDoList();
	}

	function doneAction(index) {
		todoList = markToDoAsDone(index, todoList);
		$("#todolist").html(buildListHTML(todoList));
		 saveToDoList();
	}

	function undoAction(index) {
		todoList = markToDoAsUnDone(index, todoList);
		$("#todolist").html(buildListHTML(todoList));
		saveToDoList();
	}

	function editAction(index, e) {
	   $(e.target).parent().html(getEditHTML(index, todoList[index].task));

	}

	function saveAction(index,e) {
	  // var todoItemTask = e.target.previousElementSibling.value;
	  var todoItemTask =  $(e.target).prev().val();
	  if(todoItemTask) {
		todoList = editToDo(index, todoItemTask, todoList);
		$("#todolist").html(buildListHTML(todoList));
		 saveToDoList();
	  }
	}

