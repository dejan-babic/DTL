"use strict";

/**
 * Do basic system check before going to home screen
 */
dtl.controller('splashCtrl', function($log, $q, deviceDetector){
	//TODO [DB] Get all values from config/labels

	var vm = this;

	var SYS_ERROR = {
		BROWSER_SUPPORT: "Browser in not supported"
	};

	var INIT_CHECK = {
		BROWSER_CHECK: "Checking browser compatibility",
		CONN_CHECK: "Testing services"
	};

	// Labels flags and helpers
	vm.initMessage = "Preparing DevTech Library";

	function setInitMessage (msg) {
		vm.initMessage = msg;
	}

	function checkClientAgent () {
		$log.debug("splashCtrl:checkClientAgent()");
		setInitMessage(INIT_CHECK.BROWSER_CHECK);
		var deferred = $q.defer();
		deviceDetector.browser === "chrome" ? deferred.resolve() : deferred.reject(SYS_ERROR.BROWSER_SUPPORT);
		return deferred.promise;
	}

	function checkConnectivity () {
		$log.debug("splashCtrl:checkConnectivity()");
		setInitMessage(INIT_CHECK.CONN_CHECK);
		var deferred = $q.defer();
		return deferred.promise;
	}

	function handleSystemCheckFail (reason) {
		$log.debug("splashCtrl:handleSystemCheckFail()");
		$log.debug(reason);
	}

	// Goes through check procedures
	function init () {
		$log.debug("splashCtrl:init()");
		checkClientAgent()
			.then(checkConnectivity)
			.catch(handleSystemCheckFail)
	}

	// Start the show
	init();
});