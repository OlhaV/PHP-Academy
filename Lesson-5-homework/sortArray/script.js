var arr = [12, 23, 54, 4546, 546, 123, 123, -123, 234, -234, 234234, 23, 123, 45];

// using bubble sort function  
function BubbleSort(array) {
	for (j = 0; j < array.length; j++) {
		for (i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i + 1]) {
				var a = array[i]; 
				array[i] = array[i + 1];
				array[i + 1] = a;
			} 
		}
	}
	return array;
}

console.log(BubbleSort(arr));

// using native sort() method 
var sorted = arr.sort(function(a, b) {
	return a - b;
});

console.log(sorted);