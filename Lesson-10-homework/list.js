function ListCtrl($scope) {

    //$scope содержит данные модели. Это связующее звено между контроллером и видом.
    //$scope всего лишь один из сервисов, внедренных в контроллер.
    
    // Мы создали модель с двумя делами в списке. Обратите внимание, что вашей модели нужно просто присвоить $scope
    //и AngularJS отразит состояние в пользовательском интерфейсе самостоятельно. Модель данных это старый-добрый объект JavaScript, который не нужно чем либо оборачивать или изменять свойства через специальные сеттеры.

    $scope.items = [
      { text: 'Chocolate', done: true, date: "2016-12-12"},
      { text: 'Potato', done: false, date: "2016-12-09"},
      { text: 'Banana', done: false, date: "2016-12-16"},
      { text: 'Water', done: true, date: "2016-12-16"}
    ];
 
    $scope.addItem = function () {
        if($scope.itemText && $scope.itemDate) {
            $scope.items.push({ text: $scope.itemText, done: false, date: $scope.itemDate});
        } else if (!$scope.itemText){
            alert('Please insert something');
        } else if (!$scope.itemDate) {
            alert('Please choose a date');
        } else {
            alert('Please insert required data');
        }
        //Неизменяемый метод Array.push. Его вызов обновляет модель, которая затем обновляет вид посредством связывания данных.
        //ng-repeat связан с этим массивом. Он автоматически проходится по массиву и добавляет новый DOM-элемент в вид. 

        // $scope.itemText Из-за двунаправленного связывания данных модель всегда находится в актуальном состоянии. Это означает, что мы можем запросто читать состояние 
        //пользовательского ввода. Нет необходимости регистрировать колбэки, обработчики событий или зависимости из API фреймворка.
        $scope.itemText = '';
        //Записать в текстовое поле пустой строки
    };
 

    // Вычисляем количество оставшихся покупок.
    $scope.remain = function () {
        var count = 0;

        // angular.forEach(...) - вызывает функцию iterator для каждого элемента коллекции obj, которая может быть объектом или массивом. Функция iterator вызывается как iterator(value, key), где value это значение текущего свойства объекта или элемент массива, и key это имя свойства в объекте или индекс элемента в массиве.

        angular.forEach($scope.items, function(item) {
            count += item.done;
        });

        return $scope.items.length - count;
    };

    $scope.removeItem = function() {
        delete $scope.items[itemIndex];
    }
}