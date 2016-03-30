function updateTaskStatus(){
	var cbID = this.id.replace("cb_","");
	var itemText = document.getElementById("item_"+cbID);

	if(this.checked){
		itemText.className = "checked";

	}else{
		itemText.className = "";
	}
}
function editTask(){
	var newTaskText = prompt("what should this task be renamed to");
	if(!newTaskText || newTaskText == "" || newTaskText == " "){
		return false;
	}

	this.innerText = newTaskText;
}

function deleteTask(){
	this.style.display = "none";
}
function addnewtask(list,itemText){
	var date = new Date();
	var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

	var listItem = document.createElement("li");
	listItem.id = "li_" + id;
	listItem.ondblclick = deleteTask;


	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.id = "cb_"+id;
	checkbox.onclick = updateTaskStatus;

	var span = document.createElement("span");
	span.id = "item_"+id;
	span.innerText = itemText;
	span.onclick = editTask;

	listItem.appendChild(checkbox);
	listItem.appendChild(span);
	list.appendChild(listItem);
}

var addtask = document.getElementById("btnAdd");
addtask.onclick = function(){
	var taskboxtext = document.getElementById("taskbox");
	var itemText = taskboxtext.value;
	if(itemText == "" || itemText ==" "){
		return false;
	}
	addnewtask(document.getElementById("todolist"),itemText);
	taskboxtext.focus();
	taskboxtext.select();
};