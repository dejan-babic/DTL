(function(){
	'use strict';

	/**
	 * Preserve and monitor different app states
	 */
	angular.module('dtl')
		.factory('dtlState', dtlState);

	dtlState.$inject = ['$log'];

	function dtlState($log) {

		var state = {
			initialized: false
		};

		return {
			setInitialized: setInitialized,
			resetInitialized: resetInitialized,
			isInitialized: isInitialized
		};

		function setInitialized() {
			$log.debug('dtlState:setInitialized()');
			state.initialized = true;
		}

		function resetInitialized() {
			$log.debug('dtlState:resetInitialized()');
			state.initialized = false;
		}

		function isInitialized() {
			$log.debug('dtlState:isInitialized()');
			return state.initialized;
		}
	}

})();