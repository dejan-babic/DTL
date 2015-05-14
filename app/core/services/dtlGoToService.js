(function(){
	'use strict';

	/**
	 * Used to navigate route endpoints of the app
	 */
	angular.module('dtl')
		.factory('dtlGoTo', dtlGoTo);

	dtlGoTo.$inject = ['$log', '$location'];

	function dtlGoTo($log, $location) {

		var ROUTES = {
			HOME: 'Home'
		};

		return {
			home: home,
			somewhere: somewhere
		};

		function home() {
			$log.debug('dtlGoTo:home()');
			$location.path(ROUTES.HOME);
		}

		function somewhere(route) {
			$log.debug('dtlGoTo:somewhere()');
			$location.path(route);
		}
	}

})();