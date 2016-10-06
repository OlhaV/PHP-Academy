function Participants () {
	// массив людей
	var array = [
		{
			'name' : 'Ольга', 
			'sname': 'Василишин',
			'age'  : 31, 
			'languages' : 'js, php, java, ruby'
		},
		{
			'name' : 'Василий', 
			'sname': 'Петров',
			'age'  : 36, 
			'languages' : 'js, php'
		},
		{
			'name' : 'Иван', 
			'sname': 'Трушкин',
			'age'  : 22, 
			'languages' : 'js, html, css'
		}

	],
		askConfirm = false, 
		
		// buttons: 
		addBtn = document.getElementsByClassName('add')[0],
		showBtn = document.getElementsByClassName('showList')[0],
		deleteBtn = document.getElementsByClassName('delete')[0],
		sortByNameBtn = document.getElementsByClassName('sortByName')[0],
		sortByLangBtn = document.getElementsByClassName('sortByLang')[0],
		quitBtn = document.getElementsByClassName('quit')[0],
		sortByAgeBtn = document.getElementsByClassName('sortByAge')[0],

		// fields: 
		infoField = document.getElementsByClassName('info')[0];

	function ask(obj) {
		    obj.name = prompt("Введите свое имя:");
		    obj.sname = prompt("Введите свою фамилию:");
		    obj.age = +prompt("Введите свой возраст:");
		    obj.languages = prompt('Какие языки вы используете?');
		    askConfirm = confirm('Продолжить опрос?');
		}

	function add(obj) {
		array.push(obj);
	}

	function print(arr) {
		infoField.innerHTML = '';
		for (i in arr) {
	    	infoField.innerHTML += "Имя: " + arr[i]['name'] + "<br />";
	    	infoField.innerHTML += "Фамилия: " + arr[i]['sname'] + "<br />";
	    	infoField.innerHTML += "Возраст: " + arr[i]['age'] + "<br />";
	    	infoField.innerHTML += "Языки программирования: " + arr[i]['languages'] + "<br />";
	    	infoField.innerHTML +=  "<hr/>";
		}
	}

	function deleteProperties(arr) {
		delete arr[i]['name'];
		delete arr[i]['sname'];
		delete arr[i]['age'];
		delete arr[i]['languages'];
		delete arr[i];
	}

	function deleteByName(personName, arr) {
		for (i in arr) {
			if (arr[i]['name'] == personName) {
				deleteProperties(arr);
				arr.splice(i, 1);
			} 
			// else {
			// 	alert('Такого человека в списке нет');
			// }
		}
	}

	function deleteByNumber(personNumber, arr) {
 		for (i = 0; i < arr.length; i++) {
			if (i+1 == personNumber) {
				deleteProperties(arr);
				arr.splice(i, 1);
			} 
			// else {
			// 	alert('Такого человека в списке нет');
			// }
		}
	}

	function deletePerson() {

		var method = prompt('Удалить человека по имени или по номеру? Введите "имя" или "номер"', 'имя/номер');
		
		if (method == 'имя') {
			var personName = prompt('Кого вы хотите удалить? Введите имя', 'Василий');
			deleteByName(personName, array);
		} else if (method == 'номер') {
			var personNumber = +prompt('Какого по счету человека вы хотите удалить? Введите номер', '2');
			deleteByNumber(personNumber, array);
		} else {
			alert('Вы ввели неправильное значение');
		}
		print(array);
	}

	function changePlace(a) {
		var k = a[i];
		a[i] = a[i+1];
		a[i+1] = k;
	}
	
	function sortByName(arr) {
		if (arr.length == 0) {
			return [];
		}
		for (j = 0; j < arr.length; j++) {
			for (i = 0; i < arr.length - 1; i++) {
				if (arr[i].name > arr[i+1].name) {
					changePlace (arr);
				} else {
					continue;
				}
			}
		}
	}

	function sortByLang(arr) {
		for (j = 0; j < arr.length; j++) {
			for (i = 0; i < arr.length - 1; i++) {
				if (arr[i].languages.split(' ').length < 
					arr[i + 1].languages.split(' ').length) {
					changePlace(arr);
				}
			}
		}
	}

	function sortByAge(arr) {
		for (j = 0; j < arr.length; j++) {
			for (i = 0; i < arr.length - 1; i++) {
				if (arr[i].age > arr[i + 1].age) {
					changePlace(arr);
				}
			}
		}
	}

	// --------------- events ---------------- 

	// добавить человека в список 
	addBtn.onclick = function(){

	do {
		var person = {
			'name' : '',
			'sname': '',
			'age'  : '',
			'languages' : ''
		}

		ask(person);
		add(person);

		} while (askConfirm);
	}

	// показать весь список
	showBtn.onclick = function() {
		print(array);
	} 

	// удалить человека из списка 
	deleteBtn.onclick = function() {
		deletePerson();
	}

	// отсортировать по имени
	sortByNameBtn.onclick = function() {
		sortByName(array);
		print(array);
	}

	// отсортировать по количеству языков
	sortByLangBtn.onclick = function() {
		sortByLang(array);
		print(array);
	}

	sortByAgeBtn.onclick = function() {
		sortByAge(array);
		print(array);
	}
}