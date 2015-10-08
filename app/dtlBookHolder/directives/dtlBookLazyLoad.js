(function(){
	'use strict';

	angular.module('dtl')
		.directive('dtlBookLazyLoad', dtlBookLazyLoad);

	dtlBookLazyLoad.$inject = [];

	function dtlBookLazyLoad() {

		return {
			restrict: 'A',
			link: function(scope, element) {
				element.hide();
				element.bind('load', function() {
					showImage(element)
				});
			}
		};

		function showImage(el) {
			el.delay(400).fadeIn('slow', 'swing');
		}
	}


})();