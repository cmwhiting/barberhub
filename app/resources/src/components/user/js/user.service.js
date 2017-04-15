;(function() {

	var app = angular.module('components');

	var service = function($http) {


		this.get = function() {
			return $http({
				url: '/content/user/user.json'
			});
		};
	};

	service.inject = ['$http'];
	app.service('user', service);

})();