var a = parseInt(prompt('Please enter the first number'));
var b = +prompt('Please enter the second number');
var operator = prompt('Please choose the operation: +, -, *, /')

// first check the values of a and b 
if (!isNaN(a) && !isNaN(b)) {
	// then check the operator 
	if (operator == '+' || operator == '-' || 
		operator == '*' || operator == '/') {
		// if a, b and operator are correct, calculate
		switch(operator) {
			case '+': 
				document.write(a + b);
				break;
			case '-': 
				document.write(a - b);
				break;
			case '*':
				document.write(a * b);
				break;
			case '/': 
				document.write(a / b);
		}
	// in case the operator is invalid
	} else {
		alert('Please select valid operator');
	} 
// in case a and b are invalid 
} else {
	alert('Please enter valid numbers');
}