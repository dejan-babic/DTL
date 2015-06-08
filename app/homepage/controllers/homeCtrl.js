(function(){
	'use strict';

	angular.module('dtl')
		.controller('homeCtrl', homeCtrl);

	homeCtrl.$inject = ['books', 'CONFIG'];

	function homeCtrl(books, CONFIG) {
		var vm = this;
		vm.books = books;
		vm.imgAlt = CONFIG.IMG_ALT;
	}

})();