angular.module('customFilter', function($scope) {
	$scope.customFilter = function(value) {
        return !value.done || value.priority 
    }
})