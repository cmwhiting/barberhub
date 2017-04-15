;(function() {

	var app = angular.module('components');

	var directive = function() {
		return {
			restrict: 'AE',
			controller: 'playerCtrl',
			templateUrl: '/resources/src/components/player/templates/player.template.html'
		};
	};

	directive.$inject = [];
	app.directive('mpPlayer', directive);

})();