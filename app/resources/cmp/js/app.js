;(function() {

	var app = angular.module('hub', ['factory', 'controllers', 'components']);

	angular.element(document).ready(function() {
		angular.bootstrap(document.getElementById('hub'), ['hub']);
	});

})();