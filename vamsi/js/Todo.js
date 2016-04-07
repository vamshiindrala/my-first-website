
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