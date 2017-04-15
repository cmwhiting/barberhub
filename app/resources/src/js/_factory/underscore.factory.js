;(function() {

	var app = angular.module('factory');

	var factory = function($window) {
		return $window._;
	};

	factory.$inject = ['$window'];
	app.factory('_', factory);

})();