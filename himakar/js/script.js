// Your js goes here
//numbersToPrint is 5: 0,1,1,2,3
//numbersToPrint is 1: 0
//numbersToPrint is 2: 0,1
//numbersToPrint is undefined: Please specify a integer > 0
		
/*	
		function printFibonocci(numbersToPrint){
		var x=0;
		var y=1;
		var z;
		if(parseInt(numbersToPrint) > 0) {
			//TODO implementation
			for (var i=0;i<=0;i++)
			{
				var z=var x+var y;
				var x=var y;
				var y= var z;
			}
		}else{
			console.error("Please specify a integer > 0");
		}
	} 
*/

function printFibonocci(){
	var i;
	var x = []; // Initializing array
	x[0] = 0;
	x[1] = 1;
	var num;
	num = document.getElementById("number").value;
	for(i=0; i<=num; i++)
	{
	    x[i] = x[i-2] + x[i-1];
	    console.log(x[i]+"<br/>");
	}
}