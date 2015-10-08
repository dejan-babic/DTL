(function() {
	'use strict';

	/**
	 * Define config values
	 */
	angular.module('dtlConfig', [])
		.constant("CONFIG", {
			//TODO [DB] set these values from environment values
			NO_SERVICE: false,
			DEBUG: true,
			IMG_ALT: '//placehold.it/128x192/f8f8f8&text=DTL'
		});
})();
