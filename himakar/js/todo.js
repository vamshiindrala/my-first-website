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

