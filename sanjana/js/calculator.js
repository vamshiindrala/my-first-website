var evalStringArray = [];
var clearEvalStringArray = false;
document.getElementById("cl").addEventListener("click", function() {
    handleKeyClick('AC');
});
document.getElementById("op1").addEventListener("click", function() {
    handleKeyClick('/');
});
document.getElementById("op2").addEventListener("click", function() {
    handleKeyClick('*');
});
document.getElementById("op3").addEventListener("click", function() {
    handleKeyClick('-');
});
document.getElementById("op4").addEventListener("click", function() {
    handleKeyClick('+');
});
document.getElementById("btn1").addEventListener("click", function() {
    handleKeyClick('1');
});
document.getElementById("btn2").addEventListener("click", function() {
    handleKeyClick('2');
});
document.getElementById("btn3").addEventListener("click", function() {
    handleKeyClick('3');
});
document.getElementById("btn4").addEventListener("click", function() {
    handleKeyClick('4');
});
document.getElementById("btn5").addEventListener("click", function() {
    handleKeyClick('5');
});
document.getElementById("btn6").addEventListener("click", function() {
    handleKeyClick('6');
});
document.getElementById("btn7").addEventListener("click", function() {
    handleKeyClick('7');
});
document.getElementById("btn8").addEventListener("click", function() {
    handleKeyClick('8');
});
document.getElementById("btn9").addEventListener("click", function() {
    handleKeyClick('9');
});
document.getElementById("btn0").addEventListener("click", function() {
    handleKeyClick('0');
});
document.getElementById("decimal").addEventListener("click", function() {
    handleKeyClick('.');
});
document.getElementById("isEqualTo").addEventListener("click", function() {
    handleKeyClick('=');
});

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

function handleKeyClick(keyEntered){
	var screenValue = getScreenValue(keyEntered) || '0';
	document.querySelector('.screen').innerHTML = screenValue;
}

function getScreenValue(keyEntered) {
	var screenValue = '';
	if(keyEntered === '='){
		screenValue = getResult(evalStringArray);
		evalStringArray = [];
		if(isFloat(screenValue)){
			//handle upto precision 12; 0.3*2=0.6
			screenValue = parseFloat(parseFloat(screenValue).toPrecision(12));
		}
		evalStringArray.push(screenValue);
		clearEvalStringArray = true;
	}else if(keyEntered === 'AC'){
		evalStringArray = [];
		clearEvalStringArray = false;
	}else {
		if(clearEvalStringArray && !isTokenAnOperator(keyEntered)){
			evalStringArray = [];
		}
		clearEvalStringArray = false;
		constructEvalString(keyEntered, evalStringArray);
		screenValue = evalStringArray.join(' ');
	}
	return screenValue;
}

function getResult(evalStringArray) {
	if(evalStringArray && evalStringArray.length > 0){
		if(isTokenAnOperator(evalStringArray[0])){
			evalStringArray.unshift('0');
		}
		if(isTokenAnOperator(evalStringArray[evalStringArray.length - 1])){
			evalStringArray.pop();
		}
		return eval(evalStringArray.join(''));
	}
	return 0;
}


function constructEvalString(keyValue, evalStringArray) {
	var evalStringArray = evalStringArray || [];
	if(keyValue){
		keyValue = keyValue + '';
		if(evalStringArray.length > 0){
			if(isTokenAnOperator(keyValue)){
				var previousToken = evalStringArray[evalStringArray.length - 1];
				if(isTokenAnOperator(previousToken)){
					evalStringArray.pop();
				}
				evalStringArray.push(keyValue);
			}else{
				var previousToken = evalStringArray[evalStringArray.length - 1];
				if(isTokenAnOperator(previousToken)){
					evalStringArray.push(keyValue);
				} else {
					evalStringArray.pop();
					evalStringArray.push(previousToken + keyValue);
				}
			}
		}else{
			evalStringArray.push(keyValue);
		}
		return evalStringArray;
	}else{
		return [];
	}
}

function isTokenAnOperator(token){
	var operators = ['+', '-', '*', '/'];
	for (var i = 0; i < operators.length; i++) {
		if(operators[i] === token){
			return true;
		}
	}
	return false;
}

if (typeof module !== 'undefined' && module.exports != null){
  exports.constructEvalString = constructEvalString;
  exports.isTokenAnOperator = isTokenAnOperator;
  exports.getResult = getResult;
  exports.getScreenValue = getScreenValue;
}