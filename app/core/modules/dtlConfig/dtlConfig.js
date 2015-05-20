(function() {
	'use strict';

	/**
	 * Define config values
	 */
	angular.module('dtlConfig', [])
		.constant("CONFIG", {
			//TODO [DB] set these values from environment values
			NO_SERVICE: true,
			DEBUG: true
		});
})();
