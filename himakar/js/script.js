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

function getFibonocci(numbersToPrint){
	if (parseInt(numbersToPrint)>0) {
		var i;
		var x = []; // Initializing array
		for(i=0; i<=numbersToPrint; i++){
			if(i===0) {
				x[0]=0;
				continue
			}
			else if(i===1) {
				x[1]=1;
				continue;
			} 
			x[i] = x[i-2] + x[i-1];
		}
		return x;
	}
	else {
		return ["Specify an integer which is > 0"];
	}
}

function printFibonocci(){
	var output=document.getElementById("output"),
		value=document.getElementById("number").value,
		html="",
		out=document.getElementById("out");

	getFibonocci(value).forEach(function(value,index){
		if (isNaN(value)){
			value ="<div style='color:red'>"+value+"</div>"
		}
		html=html +value+"<br/>"
	});
	out.innerHTML="OUTPUT";
	output.innerHTML=html;
}

if (typeof module !=='undefined' && module.exports !==null){
	exports.getFibonocci=getFibonocci;
	exports.printFibonocci=printFibonocci;
}