(function(){
	var module = angular.module('todo', []);

	function global(){
		this.name = 'Todo App';
	}

	module.directive('header', function(){
		return {
			restrict : 'E',
			templateUrl: '/todoheader.html',
			controller: global,
			controllerAs: 'header'
		};
	});
	module.controller('todoCtrl', function($scope) {
		$scope.todoList = [];
		// $scope.todoAdd = function() {
		// 	$scope.todoList.push({todoText:$scope.todoInput, done:false});
  //      		$scope.todoInput = "";
  //      	};
       	$scope.addTodoTask = function() {
       		if(event.keyCode == 13 && $scope.todoInput){
       			$scope.todoList.push({todoText:$scope.todoInput, done:false});
       			$scope.todoInput = '';
       		}
       	};
       	$scope.todoDelete = function(index) {
        	$scope.todoList.splice(index, 1);
    	};
    	$scope.class = "undo";
		$scope.strikethrough = "";
  		$scope.changeClass = function(){
  			if (this.class === "undo"){
    			this.class = "done";
    			this.strikethrough = "strike-through";
  			}
    		else{
    			this.class = "undo";
    			this.strikethrough = "";
    		}
    	};
    	$scope.editMode = function(){
    		$(event.target).closest('li').toggleClass('editing');
    	};
  		$scope.editOnEnter = function(todo){
      		if(event.keyCode == 13 && todo.todoText){
          		$scope.editMode();
      		}	
  		};

	});

})();