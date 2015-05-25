(function(){
	'use strict';

	angular.module('dtl')
		.directive('dtlBookHolder', dtlBookHolder);

	dtlBookHolder.$inject = ['$log'];

	function dtlBookHolder($log) {
		return {
			restrict: 'E',
			templateUrl: 'app/dtlBookHolder/templates/directives/dtlBookHolder.html',
			replace: true,
			scope: {
				book: '='
			}
		}
	}

})();