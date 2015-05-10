(function(){
	'use strict';

	/**
	 * Used to navigate route endpoints of the app
	 */
	angular.module('dtl')
		.factory('goTo', goTo);

	goTo.$inject = ['$log', '$location'];

	function goTo($log, $location) {

		var ROUTES = {
			HOME: 'Home'
		};

		return {
			home: home,
			somewhere: somewhere
		};

		function home() {
			$log.debug('goTo:home()');
			$location.path(ROUTES.HOME);
		}

		function somewhere(route) {
			$log.debug('goTo:somewhere()');
			$location.path(route);
		}
	}

})();