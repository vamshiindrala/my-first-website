document.querySelector('#taskInput').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (( key == 13 ) && ( document.querySelector('#taskInput').value.length > 0 )) // 13 is enter
    	addToList( this.value.trim() );
});

var taskList = [],
	completedTasks = [];

if( JSON.parse( localStorage.getItem( 'taskList' )))
	taskList = JSON.parse( localStorage.getItem( 'taskList' ));
else
	localStorage.setItem("taskList", JSON.stringify( taskList ));

updateCompletedListArray();
updateListView();

function updateCompletedListArray() {
	completedTasks = [];

	taskList.forEach(function( task ) {
		if( task.done )
			completedTasks.push( taskList.indexOf( task ) + '' );
	});
}

function addToList( task ){
	taskList.push({
		name: task,
		done: false
	});

	updateListView();

	localStorage.setItem('taskList', JSON.stringify( taskList ));
	document.querySelector('#taskInput').value = '';
}

function updateListView() {
	var ul = document.getElementById('taskList');

	ul.innerHTML = '';

	taskList.forEach(function( task ) {
		var listItem = document.createElement('li'),
			taskLabel = document.createElement('label'),
			delBtn = document.createElement('span'),
			checkbox = document.createElement('input');
			// editBtn = document.createElement('button');

		listItem.className = 'task';
		listItem.id = taskList.indexOf( task );

		taskLabel.className = 'taskLabel';
		taskLabel.textContent = task.name;
		taskLabel.htmlFor = 'c' + taskList.indexOf( task );

		delBtn.className = 'deleteTaskBtn';
		delBtn.textContent = 'X';
		delBtn.onclick = deleteThisTask;


		// editBtn.className = 'editTaskBtn';
		// editBtn.id = 'c' + taskList.indexOf( task );
		// editBtn.textContent = 'edit';
		// editBtn.onclick = editThisTask;
		// editBtn.type = 'button';

		checkbox.className = 'taskCheckbox';
		checkbox.id = 'c' + taskList.indexOf( task );;
		checkbox.type = 'checkbox';
		checkbox.checked = task.done;
		checkbox.onclick = toggleChecked;


		listItem.appendChild( checkbox );
		listItem.appendChild( taskLabel );
		// listItem.appendChild( editBtn );
		listItem.appendChild( delBtn );
			  ul.appendChild( listItem );
	});
}

function toggleChecked(e) {
	var checkStatus = e.target.checked,
		task = e.target.parentElement,
		taskId = task.id,
		removed = false;

	taskList[taskId].done = checkStatus;

	if( completedTasks.length === 0 ) {
		completedTasks.push( taskId );
		task.style.textDecoration='line-through';
	}
	else {
		completedTasks.forEach(function( index ) {
			if( taskId === index ) {
				completedTasks.splice( completedTasks.indexOf( index ), 1 );
				removed = true;
				task.style.textDecoration='none';
			}
		});

		if( !removed ) {
			completedTasks.push( taskId );
			completedTasks.sort();
			task.style.textDecoration='line-through';
		}
	}

	saveLocalList();
}

function deleteThisTask(e) {
	taskList.splice( e.target.parentElement.id, 1 );
	saveLocalList();
	updateCompletedListArray();
	updateListView();
}

function deleteCompleted() {
	var length = completedTasks.length;

	for( var i = completedTasks.length; i--; ) {
		taskList.splice( completedTasks[i], 1 );
	}

	saveLocalList();
	updateCompletedListArray();
	updateListView();
}

function deleteAll() {
	if(( taskList.length > 0 ) && confirm( "clear the task" )) {
		var ul = document.getElementById('taskList');
		ul.innerHTML = '';
		taskList = completedTasks = [];
		saveLocalList();
	}
}

function saveLocalList() {
	localStorage.setItem("taskList", JSON.stringify( taskList ));
}