angular.module('toDoList', [])
.controller('ListCtrl', function($scope){

    $scope.items = localStorage.getItem('entries') ? 
    angular.fromJson(localStorage.getItem('entries')) : 
    [
      { text: 'Buy chocolate', done: false, date: "2017-01-12", priority: 'High'},
      { text: 'Pay bills', done: false, date: "2017-02-16", priority: 'High'},
      { text: 'Visit granpa', done: false, date: "2017-02-09", priority: 'Low'},
      { text: 'Call mom', done: false, date: "2017-01-07", priority: 'Medium'}
    ];

    $scope.$watch('items', function() {
    	localStorage.setItem('entries', angular.toJson($scope.items));
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
        return !value.done || value.priority
    }

    $scope.remain = function () {
        var count = 0;
        angular.forEach($scope.items, function(item) {
            count += item.done;
        });

        return $scope.items.length - count;
    }

    $scope.checkDeadline = function(item) {
        var today = new Date();
        var date = new Date($scope.items[$scope.items.indexOf(item)].date.split('-'));

        var className =  date.getTime() < today.getTime() ? 'overdue' : 'due';
        return className;
    }

    $scope.removeItem = function(item) {
        $scope.items.splice($scope.items.indexOf(item), 1); 
    }

    $scope.changeItem = function(item) {
        var editedItemText = prompt('Do you want to change this item?', $scope.items[$scope.items.indexOf(item)].text);
    	var editedItemDate = prompt('Do you want to change due date?', $scope.items[$scope.items.indexOf(item)].date);
    	if(editedItemText || editedItemDate) {
            $scope.items[$scope.items.indexOf(item)].text = editedItemText;
    		$scope.items[$scope.items.indexOf(item)].date = editedItemDate;
    	}
    }


})