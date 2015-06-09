(function() {
	'use strict';

	/**
	 * Define service endpoints
	 */
	angular.module('dtlServices', [])
		.constant("SERVICES", {
			STORED_BOOKS: 'some url',
			STORED_BOOKS_DUMMY: 'data/booksArray.json'
		});
})();
