(function(){
	'use strict';

	angular.module('dtl')
		.controller('homeCtrl', homeCtrl);

	homeCtrl.$inject = ['$log', 'books', 'CONFIG', 'dtlGoTo', 'dtlState', 'dtlSpinner'];

	function homeCtrl($log, books, CONFIG, dtlGoTo, dtlState, dtlSpinner) {
		var vm = this;
		vm.books = books;
		vm.imgAlt = CONFIG.IMG_ALT;

		vm.init = function() {
			$log.debug('homeCtrl:init()');
			if (!dtlState.isInitialized()) {
				dtlGoTo.load();
			}
			dtlSpinner.stop();
		};

		vm.init();
	}

})();