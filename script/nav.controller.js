'use strict';

angular.module('BookApp').controller('NavCtrl', function($scope){
	var _state = 'list';

	$scope.setState = function(state) {
		_state = state;
	}

	$scope.isState = function(state) {
		return _state === state;
	}

});