(function(){
	'use strict';

	angular.module('dtl')
		.controller('homeCtrl', homeCtrl);

	homeCtrl.$inject = ['books'];

	function homeCtrl(books) {
		var vm = this;
		vm.books = books;
	}

})();