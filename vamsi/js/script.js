// Your js goes here

Implement the following function
//numbersToPrint is 5: 0,1,1,2,3
//numbersToPrint is 1: 0
//numbersToPrint is 2: 0,1
//numbersToPrint is undefined: Please specify a integer > 0

   function printFibonocci(n) {
           var s = 0;
           if(n == 0) return(s);
           if(n == 1) 
           {
           s += 1;
           return(s);
           }
      else {
      	console.error(return(printFibonocci(n - 1) + printFibonocci(n - 2)));     
       }
     }