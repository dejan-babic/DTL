(function(){
	'use strict';

	/**
	 * Stores some of the core and shared functionality
	 */
	angular.module('dtl')
		.controller('mainCtrl', mainCtrl);

	mainCtrl.$inject = ['$rootScope', 'dtlSpinner'];

	function mainCtrl($rootScope, dtlSpinner) {

		var vm = this;

		vm.init = function () {
			registerListeners();
		};

		vm.init();

		function registerListeners() {

			$rootScope.$on("$routeChangeStart", function(event, next, current) {
				dtlSpinner.start();
			});
			$rootScope.$on("$routeChangeSuccess", function(event, next, current) {
				dtlSpinner.stop();
			});

		}

	}

})();
