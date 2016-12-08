function Validator(sForm, sName, sSurname, sEmail, sPhone) {
	var v = this;
	
	v.form = $(sForm);
	v.infoFields = $('.input_personal_info');

	// flags 

	v.result = false; 
	v.checked = false;


	v.test = function() {
		var pattern = patterns.get(event.target.name);
		v.result = pattern.test(event.target.value);
	}

	v.changeColor = function() {
		if (v.result) {
			$(event.target).removeClass('error');
			$(event.target).addClass('correct');
		} else {
			$(event.target).removeClass('correct');
			$(event.target).addClass('error');
		}
	}

	$.each(v.infoFields, function(index, value){

		value.onblur = function(){
			v.test();
			v.changeColor();
			if (v.result) {
				v.checked = true;
			} else {
				v.checked = false;
			}
		}

	})
	

	v.form.submit(function(e){

		// window.localStorage.clear();
		
		$.each(v.infoFields, function(index, value){
			window.localStorage.setItem(value.getAttribute('name'), value.value);

		});
		
		console.log(window.localStorage);

		e.preventDefault();
		if (v.checked) {
			alert('Form is submitted');
		}
	});
}


Validator.prototype = new Component();