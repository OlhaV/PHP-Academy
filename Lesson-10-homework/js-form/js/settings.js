// Статический объект  
var settings = {};


// Свойство, в которое сохраним массив данных (с переводами строк)
settings.data = {};

//Метод, который это сделает
settings.init = function(oSettings) {
	settings.data = oSettings;
}

//Метод, который будет получать строчку из массива переводов по ключу - классу лейбла и ключу - названию языка
settings.get = function(sSettingsName) {
	return settings.data[sSettingsName];
}