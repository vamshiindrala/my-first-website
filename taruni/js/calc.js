var keys = document.querySelectorAll('.calci input');
var operators = ['+', '-', 'x', '/'];
var decimalAdded = false;

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		var input = document.querySelector('.calciscreen');
		var inputvalue = input.value;
		var keyvalue = this.value;
		
		if(keyvalue == 'CE') {
			input.value = '';
			decimalAdded = false;
		}
		else if(keyvalue == '=') {
			var equation = inputvalue;
			var lastChar = equation[equation.length - 1];
			equation = equation.replace(/x/g, '*');
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')//checking the last operator
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.value = eval(equation);

			 	console.log(equation);
			 	console.log(eval(equation));
				
			decimalAdded = false;
		}
		
		else {
			input.value += keyvalue;
		}
		
		e.preventDefault();
	} 
}
