;(function() {

	var app = angular.module('components');

	var controller = function($scope) {
		$scope.mp = {
			loaded: true,
			playing: false
		};
	};

	controller.$inject = ['$scope'];
	app.controller('playerCtrl', controller);

})();