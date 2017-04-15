;(function() {

	var app = angular.module('controllers');

	var controller = function($scope, $q, user) {
		var _this = this;

		user.get().then(function(data) {
			_this.user = data.data;
		}, function() {
			_this.user = false;
		});
	};

	controller.$inject = ['$http', '$q', 'user'];
	app.controller('hub', controller);

})();