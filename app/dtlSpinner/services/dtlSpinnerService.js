'use strict';

dtl.factory('dtlSpinner', ['$log', '$document', function ($log, $document) {

	var container;

	return {
		init: function () {
			$log.debug('dtlSpinner:init()');
			container = $document.find('#dtlSpinner');
			if (!container.length > 0) {
				throw "dtlSpinner template not found";
			}
		},
		start: function (msg) {
			$log.debug('dtlSpinner:start()');
			this.message = msg;
			container.fadeIn('slow');
		},
		update: function (msg) {
			$log.debug('dtlSpinner:update()');
			this.message = msg;
		},
		stop: function () {
			$log.debug('dtlSpinner:stop()');
			container.fadeOut('slow');
		},
		getMessage: function () {
			return this.message;
		},
		message: ''
	}
}]);