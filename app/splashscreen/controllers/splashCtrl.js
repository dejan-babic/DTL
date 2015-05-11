(function(){
	'use strict';

	/**
	 * Do basic system check before going to home screen
	 */
	angular.module('dtl')
		.controller('splashCtrl', splashCtrl);

	splashCtrl.$inject = ['$log', 'deviceManager', 'dtlSpinner', 'goTo'];

	function splashCtrl($log, deviceManager, dtlSpinner, goTo) {

		//TODO [DB] Get all values from config/labels

		var vm = this;

		var INIT_CHECK = {
			DEVICE: 'Getting device info',
			BROWSER: "Checking browser compatibility"
		};

		init();

		function checkDevice () {
			dtlSpinner.start(INIT_CHECK.DEVICE);
			return deviceManager.checkDevice();
		}

		function checkBrowser () {
			dtlSpinner.update(INIT_CHECK.BROWSER);
			return deviceManager.checkUserAgent()
		}

		function handleSystemCheckFail (reason) {
			$log.debug("splashCtrl:handleSystemCheckFail()");
			$log.debug("splashCtrl: " + reason);
			dtlSpinner.stop();
		}

		function wrapUpAndGoHome () {
			$log.debug("splashCtrl:wrapUpAndGoHome()");
			dtlSpinner.stop();
			goTo.home();
		}

		function init () {
			$log.debug("splashCtrl:init()");
			checkDevice()
				.then(checkBrowser)
				.then(wrapUpAndGoHome)
				.catch(handleSystemCheckFail)
		}
	}

})();
