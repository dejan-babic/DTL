(function(){
	'use strict';

	/**
	 * Do basic system check before going to home screen
	 */
	angular.module('dtl')
		.controller('splashCtrl', splashCtrl);

	splashCtrl.$inject = ['$log', 'deviceManager', 'dtlSpinner', 'dtlGoTo'];

	function splashCtrl($log, deviceManager, dtlSpinner, dtlGoTo) {

		//TODO [DB] Get all values from config/labels

		var vm = this;

		var INIT_CHECK = {
			START: 'Preparing library',
			DEVICE: 'Getting device info',
			BROWSER: "Checking browser compatibility"
		};

		vm.init = function() {
			$log.debug("splashCtrl:init()");
			dtlSpinner.start(INIT_CHECK.START);
			//noinspection JSUnresolvedFunction
			checkDevice()
				.then(checkBrowser)
				.then(wrapUpAndGoHome)
				.catch(handleSystemCheckFail)
				.finally(dtlSpinner.stop());
		};

		vm.init();

		function handleSystemCheckFail(reason) {
			$log.debug("splashCtrl:handleSystemCheckFail()");
			$log.debug("splashCtrl: " + reason);
			//TODO [DB] Handle errors
		}

		function wrapUpAndGoHome() {
			$log.debug("splashCtrl:wrapUpAndGoHome()");
			dtlGoTo.home();
		}

		function checkDevice() {
			dtlSpinner.update(INIT_CHECK.DEVICE);
			return deviceManager.checkDevice();
		}

		function checkBrowser () {
			dtlSpinner.update(INIT_CHECK.BROWSER);
			return deviceManager.checkUserAgent();
		}

	}

})();
