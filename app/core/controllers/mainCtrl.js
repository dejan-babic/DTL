(function(){
	'use strict';

	/**
	 * Stores some of the core and shared functionality
	 */
	angular.module('dtl')
		.controller('mainCtrl', mainCtrl);

	mainCtrl.$inject = ['$scope'];

	function mainCtrl() {
		var vm = this;
	}

})();
