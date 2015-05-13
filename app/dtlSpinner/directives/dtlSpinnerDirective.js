(function(){
	'use strict';

	/**
	 * Inserts the template for the spinner and initializes the spinner service
	 */
	angular.module('dtl')
		.directive('dtlSpinner', dtlSpinner);

	dtlSpinner.$inject = ['dtlSpinner'];

	function dtlSpinner(dtlSpinner) {
		return {
			restrict: 'A',
			templateUrl: 'app/dtlSpinner/templates/directives/dtlSpinner.html',
			transclude: true,
			link: function (scope, element) {
				dtlSpinner.init(element);
			},
			controller: function ($scope) {
				$scope.$watch(function () {return dtlSpinner.message()}, function (newVal, oldVal) {
					if (newVal !== oldVal) {
						$scope.spinnerMessage = newVal;
					}
				})
			}
		}
	}

})();