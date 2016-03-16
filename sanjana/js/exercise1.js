// Your js goes here
//numbersToPrint is 5: 0,1,1,2,3
//numbersToPrint is 1: 0
//numbersToPrint is 2: 0,1
//numbersToPrint is undefined: Please specify a integer > 0

function getFibonacci(){
        var value = document.getElementById("value").value;//get value from textbox
        printFibonocci(value);
        
}
function printFibonocci(numbersToPrint){
  var n1 = 0, n2 = 1, nextnum, outputElement;
  if(parseInt(numbersToPrint) > 0) 
  {
    outputElement = document.getElementById("output"); 
    outputElement.innerHTML = "";
    outputElement.innerHTML = "<br/>";
    outputElement.innerHTML += n1 + "<br/>";
      while(numbersToPrint >= 2)
      {       
        nextnum   = n1 + n2;
        n1  = n2;
        n2 = nextnum;
        outputElement.innerHTML += nextnum + "<br/>";
         numbersToPrint--; 
      }
    
  }else if(parseInt(numbersToPrint) <= 0){
    window.alert("Please enter a value greater than 0 to generate fiboncacci sequence");

  }
  else {
    window.alert("You have not entered any value. Please enter a value!");

  }
}
