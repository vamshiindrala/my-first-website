// Your js goes here
//numbersToPrint is 5: 0,1,1,2,3
//numbersToPrint is 1: 0
//numbersToPrint is 2: 0,1
//numbersToPrint is undefined: Please specify a integer > 0

function getFibonacci(){
				//gets the limit from textbox
				var limit = document.getElementById("limit").value;
				//call the fibonacci function
				printFibonocci(limit);
}
function printFibonocci(numbersToPrint){

	var firstnum = 0, secondnum = 1, nextnum, outputElement;

	if(parseInt(numbersToPrint) > 0) 
	{
		outputElement = document.getElementById("output"); 
		outputElement.innerHTML = "";
		outputElement.innerHTML = "<br/>";
		outputElement.innerHTML += firstnum + "<br/>";
		outputElement.innerHTML += secondnum + "<br/>";
					
		// here we are checking > 2 because we have already printed two numbers of fiboncacci series above 
		//loop through the numbers to print limit till it becomes 0 (zero)
			while(numbersToPrint > 2)
			{       
				nextnum   = firstnum + secondnum;//add the first value and second to get the next value
				firstnum  = secondnum;//assign second value to first
				secondnum = nextnum;//next value to second to find the next series
				
				outputElement.style.color = "#000000";
				outputElement.innerHTML += nextnum + "<br/>";
				 numbersToPrint--; //decrement the numbers to print limit by one 
			}
		
	}else
	{
		var errormessage = document.getElementById("output");
		errormessage.style.color = "#FF0000";
		errormessage.innerHTML = "Please enter a value greater than 0!";
	}
}









	