var _texts = {
	'langs' : {
		'label_first_name' : {
			'en' : 'First Name',
			'ru' : 'Имя',
			'ua' : 'І\'мя',
		},
		'label_last_name' : {
			'en' : 'Last Name',
			'ru' : 'Фамилия',
			'ua' : 'Прізвище',
		},
		'email_label' : {
			'en' : 'Email',
			'ru' : 'Электронная почта',
			'ua' : 'Електронна пошта',
		},
		'phone_label' : {
			'en' : 'Phone',
			'ru' : 'Телефон',
			'ua' : 'Телефон',
		},	
		'contact_label' : {
			'en' : 'How can we contact you?',
			'ru' : 'Как с вами связаться?',
			'ua' : 'Як з вами зв\'язатись?',
		},
		'by_phone_label' : {
			'en' : 'By phone',
			'ru' : 'По телефону',
			'ua' : 'Телефоном',
		},
		'by_email_label' : {
			'en' : 'By email',
			'ru' : 'По электронной почте',
			'ua' : 'Елетронною поштою',
		},
		'feedback_label' : {
			'en' : 'Your Feedback',
			'ru' : 'Ваш отзыв',
			'ua' : 'Ваш відгук',
		}
	}
	,formMessages: {
		'formError' : 'Поле заполнено некорректно'
		,'firstName' : 'Введите, пожалуйста, имя'
		,'lastName' : 'Введите, пожалуйста, фамилию'
		,'email' : 'Введите, пожалуйста, вам имейл'
		,'phone' : 'Введите, пожалуйста, ваш номер телефона'
		,'feedback' : 'Оставьте, пожалуйста, ваш отзыв'
	}
	,'regExps' : {
			'name': '^[A-Za-zА-ЯЁЇІа-яЁїі\\-]{2,15}$'
			,'surname': '^[A-Za-zА-ЯЁЇІа-яёїі\\-]{2,30}$'
			,'price': '^[A-Za-z_\\-]@[A-Za-z]{2,20}\.[a-z]{2,15}$'
			,'description': '^[A-Za-zА-ЯЁа-яЁ0-9\\.,\\-%]{5,100}$'
		}
	,'messages' : {
		'error_message' : 'Can\'t access element by selector: ' 
		,'error_form_message' : 'Форма заполнена неверно'
	}
}


settings.init(_texts);