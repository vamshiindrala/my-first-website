/*

function add(){

  var array = array || []
  
  for(var i=0; i<=array.length; i++){
    var docvalue = document.getElementById('taskInput').value;
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
*/


 
function add() {
    var task = document.getElementById('task').value;
 
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function show() {
    var todos = get_todos();
 
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 
document.getElementById('add').addEventListener('click', add);
show();