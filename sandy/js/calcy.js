 function run7(){
   document.frm.result.value += "7";
    }
    function run8(){
   document.frm.result.value += "8";
    }
    function run9(){
      document.frm.result.value += "9";
    }
    function runplus(){
      document.frm.result.value += "+";
    }
     function run4(){
      document.frm.result.value += "4";
    }
    function run5(){
      document.frm.result.value += "5";
    }
    function run6(){
      document.frm.result.value += "6";
    }
    function runminus(){
      document.frm.result.value += "-";
    }
     function run1(){
      document.frm.result.value += "1";
    }
    function run2(){
      document.frm.result.value += "2";
    }
    function run3(){
      document.frm.result.value += "3";
    }
    function rundivision(){
      document.frm.result.value += "/";
    }
     function run0(){
      document.frm.result.value += "0";
    }
    function rundot(){
      document.frm.result.value += ".";
    }
     function runeval(){
      var evaluate = eval(document.frm.result.value)

      document.frm.result.value = evaluate;
    }
    function runmulti(){
      document.frm.result.value += "*";
    }
    function runclear(){
      document.frm.result.value = "";
    }

   //functions 
   var evalStringArray = [];

function handleKeyClick(value){
  if(value === '='){
    var result = getResult(evalStringArray);
    evalStringArray = [];
    document.querySelector('.screen').innerHTML = result;
    evalStringArray.push(result);
  }else if(value === 'AC'){
    evalStringArray = [];
    document.querySelector('.screen').innerHTML = '';
  }else{
    constructEvalString(value, evalStringArray);
    document.querySelector('.screen').innerHTML = evalStringArray.join(' ');
  } 
}

function getResult(evalStringArray) {
  if(evalStringArray && evalStringArray.length > 0){
    if(isTokenAnOperator(evalStringArray[0])){
      evalStringArray.unshift('0');
    }
    if(isTokenAnOperator(evalStringArray[evalStringArray.length-1])){
      evalStringArray.pop();
    }
    return eval(evalStringArray.join(''));
  }
  return 0;
}

function constructEvalString(keyvalue, evalStringArray) {
  var evalStringArray = evalStringArray || [];
  if(keyvalue) {
    keyvalue = keyvalue + '';
    if(evalStringArray.length > 0){
      if(isTokenAnOperator(keyvalue)){
        var previousToken = evalStringArray[evalStringArray.length - 1];
        if(isTokenAnOperator(previousToken)){
          evalStringArray.pop();
        }
        evalStringArray.push(keyvalue);
      }else{
        var previousToken = evalStringArray[evalStringArray.length - 1];
        if(isTokenAnOperator(previousToken)){
          evalStringArray.push(keyvalue);
        }else{
          evalStringArray.pop();
          evalStringArray.push(previousToken + keyvalue);
        }
      }
    }else{
      evalStringArray.push(keyvalue);
    }
    return evalStringArray;
  }else{
    return [];
  }
}

/**
* Returns true or false  for the specified 
* token if its in the list of operators
*/ 
function isTokenAnOperator(token){
  var operators = ['+', '-', '*', '/'];
  for(var i =0; i < operators.length; i++) {
    if(operators[i] === token){
      return true;
    }
  }
  return false;
}


 if (typeof module !== 'undefined' && module.exports != null){
  exports.isTokenAnOperator = isTokenAnOperator;
  exports.constructEvalString = constructEvalString;
  exports.getResult = getResult;
  exports.handleKeyClick = handleKeyClick;
  }