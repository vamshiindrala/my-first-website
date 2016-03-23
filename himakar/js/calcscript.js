var keys = document.getElementById('#calculator span');
var operators = ['+', '-', 'x', '÷'];

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(in) {
		// Get the input and button values
		var input = document.getElementById('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;