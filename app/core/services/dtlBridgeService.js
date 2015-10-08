(function(){
	'use strict';

	/**
	 * Wrapper for various micro-service calls
	 */
	angular.module('dtl')
		.factory('dtlBridge', dtlBridge);

	dtlBridge.$inject = ['$log', '$http', '$q', 'CONFIG', 'SERVICES'];

	function dtlBridge($log, $http, $q, CONFIG, SERVICES) {

		return {
			getLibraryBooks: getLibraryBooks,
			checkServices: checkServices
		};

		function getLibraryBooks() {
			$log.debug('dtlBridge:getLibraryBooks()');
			var target = CONFIG.NO_SERVICE ? SERVICES.DUMMY.STORED_BOOKS : SERVICES.LIVE.STORED_BOOKS;
			return httpGet(target);
		}

		function checkServices() {
			$log.debug('dtlBridge:checkServices()');
			var serviceChecks = [];

			for (var key in SERVICES.LIVE) {
				if (SERVICES.LIVE.hasOwnProperty(key)) {
					serviceChecks.push(httpGet(SERVICES.LIVE.key));
				}
			}

			return $q.all(serviceChecks);
		}

		function httpGet(url) {

			var deferred = $q.defer();
			var method = "GET";

			url = url ? url : 'default';

			$http({
				method: method,
				url: url,
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			})
				.success(function (data, status, headers, config) {
					deferred.resolve(data, status, headers, config);
				})
				.error(function (data, status, headers, config) {
					deferred.reject(data, status, headers, config);
				});

			return deferred.promise;
		}
	}

})();