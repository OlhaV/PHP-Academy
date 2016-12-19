function ListCtrl($scope) {

    $scope.items = localStorage.getItem('entries') ? 
    angular.fromJson(localStorage.getItem('entries')) : 
    [
      { text: 'Buy chocolate', done: false, date: "2016-12-12", priority: 'High'},
      { text: 'Pay bills', done: false, date: "2016-12-16", priority: 'High'},
      { text: 'Visit granpa', done: false, date: "2016-12-09", priority: 'Low'},
      { text: 'Call mom', done: false, date: "2016-12-16", priority: 'Regular'}
    ];

    $scope.$watch('items', function() {
    	localStorage.setItem('entries', angular.toJson($scope.items));
    	console.log(angular.fromJson(localStorage['entries']));
    }, true);

    $scope.addItem = function () {
        if($scope.itemText && $scope.itemDate && $scope.priority) {
        	var newEntry = {
        		text: $scope.itemText, 
        		done: false, 
        		date: $scope.itemDate,
                priority: $scope.priority
        	}; 

            $scope.items.push(newEntry);
        }
       $scope.itemText = '';
       $scope.itemDate = '';
       $scope.priority = '';
    };
 
    $scope.customFilter = function(value) {
        return value.done;
    }

    // Вычисляем количество оставшихся покупок.
    $scope.remain = function () {
        var count = 0;
        angular.forEach($scope.items, function(item) {
            count += item.done;
        });

        return $scope.items.length - count;
    };

    $scope.removeItem = function() {
        $scope.items.splice(this.$index, 1);
    }

    $scope.changeItem = function() {
    	var editedItem = prompt('Do you want to change this item?', $scope.items[this.$index].text);
    	if(editedItem) {
    		$scope.items[this.$index].text = editedItem;
    	}
    }
}