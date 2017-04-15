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