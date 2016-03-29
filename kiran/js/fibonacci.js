function getFibonacci (numbersToPrint){
  if (parseInt(numbersToPrint) > 0){
    var i, fibonicci = [];
    for(i=0; i<numbersToPrint; i++){
      if(i === 0){
        fibonicci[i] = 0;
        continue;
      }else if(i == 1){
        fibonicci[i] = 1;
        continue;
      }
      fibonicci[i] = fibonicci[i-2] + fibonicci[i-1];
    }
    return fibonicci;
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
	//TODO
}

if (typeof module !== 'undefined' && module.exports != null){
  exports.getFibonacci = getFibonacci;
  exports.getFibonacciSequence = getFibonacciSequence;
}