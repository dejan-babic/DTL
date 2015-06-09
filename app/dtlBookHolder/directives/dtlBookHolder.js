(function(){
	'use strict';

	angular.module('dtl')
		.directive('dtlBookHolder', dtlBookHolder);

	dtlBookHolder.$inject = [];

	function dtlBookHolder() {

		return {
			restrict: 'E',
			templateUrl: 'app/dtlBookHolder/templates/directives/dtlBookHolder.html',
			replace: true,
			scope: {
				book: '=',
				imgAlt: '='
			},
			link: function(scope, element) {
				if(scope.book && scope.imgAlt) {
					scope.book = thumbnailChecker(scope.book, scope.imgAlt);
				}
			}
		};

		function thumbnailChecker(book, alt) {
			if(!book.thumbnail) {
				book.thumbnail = alt;
			}
			return book;
		}
	}

})();