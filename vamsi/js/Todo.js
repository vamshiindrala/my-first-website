/*
array = [];

function add(){

  var array = array || []
  
  for(var i=0; i<=array.length; i++){
    var docvalue = document.getElementById('inputvalue').value;
  	 var result = array.push(docvalue);
     console.log( result);
    document.getElementById('textoutput').innerHTML = array;
  }

}

function edit(EditItem){
    var editarray = array;
    for(var i=0; i<editarray.length; i++){
    	if(editarray[i] === EditItem){
          editarray.splice(i, 1, EditItem);
          break;
    	}
    	else{
    		continue;
    	}
    }
}

function Task_Read(){

}

function Delete(DeleteItem){
   var editarray = array;
    for(var i=0; i<editarray.length; i++){
    	if(editarray[i] === DeleteItem){
          editarray.splice(i, 1);
          break;
    	}
    	else{
    		continue;
    	}
    }
}

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
 index = parseInt(index);
 if (todoList && todoList.length > 0 && !isNaN(index) && index >=0) {
      todoList.splice(index, 1, todoItemTask);
      return todoList;
 }  
 return false;
}

function markToDoAsDone(index, todoList, todoItemTask) {
 index = parseInt(index);
 if (todoList && todoList.length > 0 && !isNaN(index) && index >=0) {
  for(var i=0; i< todoList.length; i++){
    if(todoList[i] === todoItemTask){
      var markDone = todoList[i].style.color = 'red';
      return markDone;
    }
    else break;
  }
 }
 return false;
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
*/
//Add a todo item

function getEditHTML(index, todoItemTask){
  var html = '<input type="text" value="'+todoItemTask+'"> <button onclick="saveAction('+index+')">Save</button>';
  return html;
}

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
  if(todoList && todoList.length > 0 && !isNaN(index) && index >= 0){
    if(todoItemTask){
      todoList[index].task = todoItemTask;
      todoList[index].date = (new Date()).getTime();
      return todoList;
    }
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

// }

// function saveToDoList() {

// }

 
function buildListHTML(todoList) {
  var html = ''; 
  if(todoList && todoList.length > 0){
      html = '<ul>';
      for(var i=0; i<todoList.length; i++) {
        if(todoList[i].status === 'Done'){
          html += '<li><span class="strike-through">' + todoList[i].task + '</span>'+
          '<button class="remove" onclick="removeAction('+i+')">x</button>'+
          '<button class="done" onclick="undoAction('+i+')">&radic;</button></li>';
        }else{
          html += '<li><span>' + todoList[i].task + '</span>'+
          '<button class="remove" onclick="removeAction('+i+')">x</button>'+
          '<button class="done" onclick="doneAction('+i+')">&radic;</button>'+
          '<button class="done" onclick="editAction('+i+', event)">Edit</button></li>';
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
