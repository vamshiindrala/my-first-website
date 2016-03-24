var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '/'];
var decimalAdded = false;

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		var input = document.querySelector('.screen');
		var inputvalue = input.innerHTML;
		var keyvalue = this.innerHTML;
		
		if(keyvalue == 'AC') {
			input.innerHTML = '';
			decimalAdded = false;
		}
		else if(keyvalue == '=') {
			var equation = inputvalue;
			var lastChar = equation[equation.length - 1];
			equation = equation.replace(/x/g, '*');
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')//checking the last operator
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
				
			decimalAdded = false;
		}
		
		else {
			input.innerHTML += keyvalue;
		}
		
		e.preventDefault();
	} 
}
