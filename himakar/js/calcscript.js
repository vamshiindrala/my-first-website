/*
window.onload = function () {
  var buttons = document.getElementsByTagName('span'),
      result = document.querySelectorAll('.result p')[0],
      clear = document.getElementsByClassName('clear')[0];
  
  for (var i = 0; i < buttons.length; i += 1) {
    if (buttons[i].innerHTML === '=') {
      buttons[i].addEventListener("click", calculate(i));
    } else {
      buttons[i].addEventListener("click", addValue(i));
    }
  }
  
  clear.onclick = function () {
    result.innerHTML = '';
  };  
  
  function addValue(i) {
    return function () {
      if (buttons[i].innerHTML === '÷') {
         result.innerHTML  += '/';
      } else if (buttons[i].innerHTML === 'x') {
         result.innerHTML  += '*';
      } else {
                    result.innerHTML += buttons[i].innerHTML;
            }
    };
  }
  
  function calculate(i) {
    return function () {
            var final_res = result.innerHTML;
      result.innerHTML = eval(final_res);
    };
  }
};
*/
/*
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
  exports.constructEvalString = constructEvalString;
  exports.isTokenAnOperator = isTokenAnOperator;
  exports.handleKeyClick = handleKeyClick;
  exports.getResult = getResult;
}
*/

