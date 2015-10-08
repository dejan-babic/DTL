(function() {
	'use strict';

	/**
	 * Define service endpoints
	 */
	angular.module('dtlServices', [])
		.constant("SERVICES", {
			LIVE: {
				STORED_BOOKS: 'http://example.com/books'
			},
			DUMMY: {
				STORED_BOOKS: 'data/booksArray.json'
			}
		});
})();
