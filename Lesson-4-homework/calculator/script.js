var a = parseInt(prompt('Please enter the first number'));
var b = +prompt('Please enter the second number');
var operator = prompt('Please choose the operation: +, -, *, /')

// check the values of a and b 
if (!isNaN(a) && !isNaN(b)) {
	// check the operator 
	switch(operator) {
		case '+':
			document.write(a + b);
			// break;
		case '-': 
			document.write(a - b);
			// break;
		case '*':
			document.write(a * b);
			// break;
		case '/': 
			document.write(a / b);
			// break;
		// in case the operator is invalid
		default: 
			alert('Please select valid operator');
		}
	} 
	// in case a and b are invalid 
else {
	alert('Please enter valid numbers');
}