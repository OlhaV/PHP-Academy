var age = +prompt('Please enter your age', 'years');

if (age > 0 && age < 6) {
	alert("You're too young to watch this!");
} else if (age >= 6 && age < 12) {
	alert('You can watch comedies');
} else if (age >= 12 && age < 18) {
	alert('You can watch this with your parents');
} else if (age >= 18) {
	alert('You can watch this');
} else {
	alert('Please enter valid age');
}