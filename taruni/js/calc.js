
var evalStringArray = [];

function handlekeyClick(value){
if(value === '='){
	var result  = getResult(evalStringArray);
	document.querySelector('.calciscreen').value = result;
}else if(value === 'CE'){
	evalStringArray = [];
	document.querySelector('.calciscreen').value = '';
}else{
	constructEvalString(value,evalStringArray);
	document.querySelector('.calciscreen').value = evalStringArray.join(' ');
}

}

function getResult(evalStringArray){
if(evalStringArray && evalStringArray.length > 0){
	if(isTokenAnOperator(evalStringArray[0])){
	evalStringArray.unshift('0');
}
if(isTokenAnOperator(evalStringArray[evalStringArray.length - 1])){
	evalStringArray.pop();
}return eval(evalStringArray.join(''));

}return 0;
}



function constructEvalString(keyvalue,evalStringArray){
	var evalStringArray = evalStringArray || [];
	if(keyvalue){
		keyvalue = keyvalue + '';
	if(evalStringArray.length > 0){
		if(isTokenAnOperator(keyvalue)){
			var previousToken = evalStringArray[evalStringArray.length-1];
			if(isTokenAnOperator(previousToken)){
				evalStringArray.pop();
			}
			evalStringArray.push(keyvalue);
		}
		else{
			var previousToken = evalStringArray[evalStringArray.length-1];
			if(isTokenAnOperator(previousToken)){
				evalStringArray.push(keyvalue);
			}
			else{
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
	var operators = ['+', '-', 'x', '/','.'];
	for(var i=0;i<operators.length;i++){
		if(operators[i] === token){
			return true;
		}
	}
	return false;
}


if (typeof module !== 'undefined' && module.exports !== null) { 
				exports.constructEvalString = constructEvalString;
				exports.isTokenAnOperator = isTokenAnOperator;
				exports.getResult = getResult;
}


