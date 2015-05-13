(function(){
	'use strict';

	/**
	 * Expose control over appearance and message of the spinner
	 */
	angular.module('dtl')
		.factory('dtlSpinner', dtlSpinner);

	dtlSpinner.$inject = ['$log', '$document'];

	function dtlSpinner($log, $document) {

		var container = false;
		var message = '';
		var initialized = false;

		return {
			init: init,
			start: start,
			update: update,
			stop: stop,
			message: getMessage
		};

		function start(msg) {
			$log.debug('dtlSpinner:start()');
			message = msg;
			container.fadeIn('slow');
		}

		function update(msg) {
			$log.debug('dtlSpinner:update()');
			message = msg;
		}

		function stop() {
			$log.debug('dtlSpinner:stop()');
			container.fadeOut('slow');
		}

		function getMessage() {
			return message;
		}

		function init(element) {
			$log.debug('dtlSpinner:init()');
			container = element.find('#dtlSpinner');
			if (container.length === 0) {
				$log.debug('dtlSpinner:init() failed. Spinner with ID dtlSpinner not found');
				//TODO [DB] Notify user
			} else {
				initialized = true;
			}
		}
	}

})();
