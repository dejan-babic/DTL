"use strict";

/**
 * Stores some of the core and shared functionality
 */
dtl.controller("mainCtrl", ["$scope", "deviceDetector", function ($scope, $location) {

	$scope.goToRoute = function (route) {
		$log.debug("mainCtrl:goToRoute()");
		$location.path(route);
	};

}]);