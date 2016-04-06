
 var array = [];

function getvalue(){
	var value = document.querySelector("#inputvalue");
	return value;
	}

function add(){
  array = array || [], docvalue = getvalue();
  for(var i=0; i<=array.length; i++){
  	 array[i].push(docvalue);
  }
 document.querySelector('.textoutput').innerHTML = array;
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