(function(){
	"use strict";

	/**
	 * Do basic system check before going to home screen
	 */
	angular.module('dtl')
		.controller('splashCtrl', splashCtrl);

	splashCtrl.$inject = ['$log', '$q', 'deviceDetector', 'dtlSpinner'];

	function splashCtrl($log, $q, deviceDetector, dtlSpinner) {

		//TODO [DB] Get all values from config/labels

		var vm = this;

		var SYS_ERROR = {
			BROWSER_SUPPORT: "Browser in not supported"
		};

		var INIT_CHECK = {
			BROWSER_CHECK: "Checking browser compatibility",
			CONN_CHECK: "Testing services"
		};

		// Start the show
		init();

		function checkClientAgent () {
			$log.debug("splashCtrl:checkClientAgent()");
			dtlSpinner.start(INIT_CHECK.BROWSER_CHECK);
			var deferred = $q.defer();
			deviceDetector.browser === "chrome" ? deferred.resolve() : deferred.reject(SYS_ERROR.BROWSER_SUPPORT);
			return deferred.promise;
		}

		function checkConnectivity () {
			$log.debug("splashCtrl:checkConnectivity()");
			dtlSpinner.update(INIT_CHECK.CONN_CHECK);
			var deferred = $q.defer();
			deferred.resolve();
			return deferred.promise;
		}

		function handleSystemCheckFail (reason) {
			$log.debug("splashCtrl:handleSystemCheckFail()");
			$log.debug(reason);
			dtlSpinner.stop();
		}

		function wrapUpAndGoHome () {
			dtlSpinner.stop();
		}

		// Goes through check procedures
		function init () {
			$log.debug("splashCtrl:init()");
			checkClientAgent()
				.then(checkConnectivity)
				.catch(handleSystemCheckFail)
				.finally(wrapUpAndGoHome)
		}
	}
})();
