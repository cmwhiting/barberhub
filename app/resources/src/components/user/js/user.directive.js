;(function() {

	var app = angular.module('components');

	var directive = function() {
		return {
			restrict: 'A',
			controller: ($scope, user) => {
				user.get().then((resp) => {
					$scope.up = resp.data;
				});
			}
		};
	};

	directive.$inject = [];
	app.directive('hubUser', directive);

})();