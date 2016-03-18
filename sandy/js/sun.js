

function getFibonocci(numbersToPrint){
  if (parseInt(numbersToPrint)>0) {
    var i;
    var x = [];
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
    return ["integer >0"];
  }
}

function printFibonocci(){
  var output=document.getElementById("output"),
    value=document.getElementById("number").value,
    html="";
    

  getFibonocci(value).forEach(function(value,index){
    html=html +value+"<br/>"
  });

  output.innerHTML=html;
}


