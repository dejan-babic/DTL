(function(){
	'use strict';

	/**
	 * Used to do app compatibility tests
	 */
	angular.module('dtl').
		factory('dtlDeviceManager', dtlDeviceManager);

	dtlDeviceManager.$inject = ['$log', '$q', 'deviceDetector', 'SYSTEM_MESSAGE'];

	function dtlDeviceManager($log, $q, deviceDetector, SYSTEM_MESSAGE) {

		return {
			checkDevice: checkDevice,
			checkUserAgent: checkUserAgent
		};

		function checkDevice() {
			$log.debug('dtlDeviceManager:checkDevice()');
			var deferred = $q.defer();
			if (deviceDetector.isDesktop()) {
				deferred.resolve(SYSTEM_MESSAGE.ACTION_OK)
			} else {
				deferred.reject(SYSTEM_MESSAGE.DEVICE_NOT_SUPPORTED);
			}

			return deferred.promise;
		}

		function checkUserAgent() {
			$log.debug('dtlDeviceManager:checkUserAgent()');
			var deferred = $q.defer();
			deviceDetector.browser === "chrome" ? deferred.resolve(SYSTEM_MESSAGE.ACTION_OK) : deferred.reject(SYSTEM_MESSAGE.BROWSER_NOT_SUPPORTED);
			return deferred.promise;
		}
	}

})();