(function(){
	'use strict';

	angular.module('dtl')
		.controller('errorCtrl', errorCtrl);

	errorCtrl.$inject = ['$log', 'dtlSpinner'];

	function errorCtrl($log, dtlSpinner) {
		var vm = this;
		vm.title = "Booom";
		vm.message = "Sorry something went wrong";

		vm.init = function() {
			$log.debug('errorCtrl:init()');
			dtlSpinner.stop();
		};

		vm.init();
	}

})();