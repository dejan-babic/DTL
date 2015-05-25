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
			HOME: 'Home',
			LOAD: 'Load'
		};

		return {
			home: home,
			load: load,
			here: here
		};

		function home() {
			$log.debug('dtlGoTo:home()');
			$location.path(ROUTES.HOME);
		}

		function load() {
			$log.debug('dtlGoTo:load()');
			$location.path(ROUTES.LOAD);
		}

		function here(route) {
			$log.debug('dtlGoTo:somewhere()');
			$location.path(route);
		}
	}

})();