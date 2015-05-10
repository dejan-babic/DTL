(function(){
	'use strict';

	angular.module('dtl')
		.directive('dtlSpinner', dtlSpinner);

	dtlSpinner.$inject = ['dtlSpinner'];

	function dtlSpinner(dtlSpinner) {
		return {
			restrict: 'A',
			templateUrl: 'app/dtlSpinner/templates/directives/dtlSpinner.html',
			transclude: true,
			link: function () {
				dtlSpinner.init();
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