"use strict";

/**
 * Stores some of the core and shared functionality
 */
dtl.controller("mainCtrl", ["$scope", "deviceDetector", function ($scope, deviceDetector) {

	function init () {
		$scope.browserSupported = (deviceDetector.browser === "chrome");
	}

	init();
}]);