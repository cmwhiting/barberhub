;(function() {

	var factory = angular.module('factory', []);
	var controllers = angular.module('controllers', []);
	var components = angular.module('components', []);

})();
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
;(function() {

	var app = angular.module('factory');

	var factory = function($window) {
		return $window.moment;
	};

	factory.$inject = ['$window'];
	app.factory('moment', factory);

})();
;(function() {

	var app = angular.module('factory');

	var factory = function($window) {
		return $window._;
	};

	factory.$inject = ['$window'];
	app.factory('_', factory);

})();
;(function() {

	var app = angular.module('components');

	var service = function($http) {

		var _service = {
			load: function() {

			},
			play: function() {

			},
			stop: function() {

			},
			pause: function() {

			},
			prev: function() {

			},
			next: function() {

			},
			scrub: function() {

			}
		};

		this.load = _service.load;
		this.play = _service.play;
		this.stop = _service.stop;
		this.pause = _service.pause;
		this.prev = _service.prev;
		this.next = _service.next;
		this.scrub = _service.scrub;
	};

	service.$inject = ['$http'];
	app.service('player', service);

})();
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