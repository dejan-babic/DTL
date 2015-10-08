(function(){
	'use strict';

	/**
	 * Do basic system check before going to home screen
	 */
	angular.module('dtl')
		.controller('splashCtrl', splashCtrl);

	splashCtrl.$inject = ['$log', 'dtlDeviceManager', 'dtlSpinner', 'dtlGoTo', 'dtlState', 'dtlBridge'];

	function splashCtrl($log, dtlDeviceManager, dtlSpinner, dtlGoTo, dtlState, dtlBridge) {

		//TODO [DB] Get all values from config/labels

		var vm = this;

		var INIT_CHECK = {
			START: 'Preparing library',
			DEVICE: 'Getting device info',
			BROWSER: "Checking browser compatibility",
			SERVICE: "Trying to connect with services"
		};

		vm.init = function() {
			$log.debug("splashCtrl:init()");
			dtlSpinner.start(INIT_CHECK.START);
			//noinspection JSUnresolvedFunction
			checkDevice()
				.then(checkBrowser)
				.then(checkServices)
				.then(wrapUpAndGoHome)
				.catch(handleSystemCheckFail)
		};

		vm.init();

		function handleSystemCheckFail(reason) {
			$log.debug("splashCtrl:handleSystemCheckFail()");
			$log.debug("splashCtrl: " + reason);
			dtlGoTo.here('Error');
		}

		function wrapUpAndGoHome() {
			$log.debug("splashCtrl:wrapUpAndGoHome()");
			dtlState.setInitialized();
			dtlGoTo.home();
		}

		function checkDevice() {
			dtlSpinner.update(INIT_CHECK.DEVICE);
			return dtlDeviceManager.checkDevice();
		}

		function checkBrowser() {
			dtlSpinner.update(INIT_CHECK.BROWSER);
			return dtlDeviceManager.checkUserAgent();
		}

		function checkServices() {
			dtlSpinner.update(INIT_CHECK.SERVICE);
			return dtlBridge.checkServices();
		}

	}

})();
