function Translate(sSelector) {
	var f = this;
	
	//properties 
	f.init(sSelector);
	
	//methods
	
	f.translate = function() {
		
		var langs = settings.get('langs');
		
		var currentLang = $(this).html();
		
		$.each(langs, function(sClassName, aContent){
			$('.' + sClassName).html(aContent[currentLang]);
		});
	}


	//events
	$('.form_langs').click(f.translate);

}


Translate.prototype = new Component();




