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
  //test cases
    var documentarray = [];
    var resultString = document.frm.result.value;
function OperatorSequencetest(resultString){
    var resultStringArray = resultString.split("");
    for(var i=0; i< resultStringArray.length; i++){
      if(isNaN(resultStringArray[i]) === true){
         if(isNaN(resultStringArray[i+1] === true)){

          return "Enter Valid OPeration";
          break;
         }
         else{
          continue;
         }
      }
      else{
        continue;
      }
    }
   

}


  /*
 var operators = ['+','-','*','/']
 var evalstringarray =[];

  function constructEvalString(keyvalue, operators, evalstringarray){
    evalstringarray = evalstringarray || [];
    if(evalstringarray.length > 0){
      if(isTokenAnOperator(keyvalue)){
        var previousToken= operators[operators.length - 1];
        if (isTokenAnOperator(previousToken)) {
          operators.pop();
        }
       operators.push(keyvalue);
    }
      else{
        var currentToken = operators[operators.length - 1];
        currentToken = currentToken + '' + keyvalue;
        operators.pop().push(currentToken);
      }
      else{
        evalstringarray.push(keyvalue);
      }
      return evalstringarray;
  
  }

  function isTokenAnOperator(token){
    for(var i=0; i< operators.length; i++){
      if(operators[i] === token){
        return true;
      }
    }
        return false;
  }

  if (typeof module !== 'undefined' && module.exports != null){
  exports.constructEvalString = constructEvalString;
  exports.isTokenAnOperator = isTokenAnOperator;
}
*/
 if (typeof module !== 'undefined' && module.exports != null){
  exports.OperatorSequencetest = OperatorSequencetest;
  }