function Component() {
	this.elem = null; // sSelector 
	
	//initializing the main property this.elem
	this.init = function(sSelector) {
		this.elem = $(sSelector);
		
		if(!this.elem.length) {
			console.error('No selector ' + sSelector);
		}
	}

	//method to find html elements 
	this.find = function(sSelector) {
		var find_result = this.elem.find(sSelector);
		
		if(find_result.length) {
			return find_result;
		} else {
			console.error('No selector ' + sSelector);
		}
	}
}