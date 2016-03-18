var getFibonacci = function (numbersToPrint){
  if (parseInt(numbersToPrint) > 0){
    var i;
    var f=[];
    for(i=0; i<numbersToPrint; i++){
      if(i === 0){
        f[i] = 0;
        continue;
      }else if(i == 1){
        f[i] = 1;
        continue;
      }
      f[i] = f[i-2] + f[i-1];
    }
    return f;
  }else{
    return  ["You have entered an invalid input. Please specify an integer > 0"];
  }
}

function getFibonacciSequence(limit){
  var sequence = '';
      getFibonacci(limit).forEach(function(value, index){
        if(isNaN(value)){
          value = "<div style='color:red'>"+value+"</div>"
        }
        sequence = sequence + value + "<br/>"
      });
      return sequence;
}

function printFibonacci(){
  var output = document.getElementById("output");
      value = document.getElementById("number").value;
      sequence = '';
      // getFibonacci(value).forEach(function(value, index){
      //   if(isNaN(value)){
      //     value = "<div style='color:red'>"+value+"</div>"
      //   }
      //   sequence = sequence + value + "<br/>"
      // });
      //output.innersequence =  "<br/>" + sequence;
      output.innersequence = "<br/>" + getFibonacciSequence(value);
}

if (typeof module !== 'undefined' && module.exports != null){
  exports.getFibonacci = getFibonacci;
  exports.printFibonacci = printFibonacci;
  exports.getFibonacciSequence = getFibonacciSequence;
}