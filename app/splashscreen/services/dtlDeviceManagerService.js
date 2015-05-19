(function(){
	'use strict';

	/**
	 * Used to do app compatibility tests
	 */
	angular.module('dtl').
		factory('dtlDeviceManager', dtlDeviceManager);

	dtlDeviceManager.$inject = ['$log', '$q', 'deviceDetector'];

	function dtlDeviceManager($log, $q, deviceDetector) {

		return {
			checkDevice: checkDevice,
			checkUserAgent: checkUserAgent
		};

		function checkDevice() {
			$log.debug('dtlDeviceManager:checkDevice()');
			var deferred = $q.defer();
			if (deviceDetector.isDesktop()) {
				deferred.resolve()
			} else {
				deferred.reject("Only Desktop is supported for now"); //TODO [DB] Move msg to SYS ERRORS
			}

			return deferred.promise;
		}

		function checkUserAgent() {
			$log.debug('dtlDeviceManager:checkUserAgent()');
			var deferred = $q.defer();
			deviceDetector.browser === "chrome" ? deferred.resolve() : deferred.reject('Browser not supported'); //TODO [DB] Move msg to SYS ERRORS
			return deferred.promise;
		}
	}

})();