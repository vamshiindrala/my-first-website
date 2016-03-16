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