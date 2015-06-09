(function(){
	'use strict';

	/**
	 * Definition of the app system messages
	 */
	angular.module('dtlSystemMessage', [])
		.constant("SYSTEM_MESSAGE", {
			ACTION_OK: 'OK',
			DEVICE_NOT_SUPPORTED: 'The device is not supported',
			BROWSER_NOT_SUPPORTED: 'The browser is not supported',
			DEFAULT_SPINNER_MESSAGE: 'Loading'
		});
})();
