;(function() {

	var app = angular.module('factory');

	var factory = function($window) {
		return $window.moment;
	};

	factory.$inject = ['$window'];
	app.factory('moment', factory);

})();