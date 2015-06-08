(function(){
	'use strict';

	/**
	 * Definition of the app & basic configuration
	 */
	angular.module('dtl', [
			'ngRoute',
			'ng.deviceDetector',
			'dtlSystemMessage',
			'dtlConfig',
			'dtlServices'
		])
		.config(function ($routeProvider) {
			$routeProvider.when('/Home', {
				templateUrl: 'app/homepage/templates/views/home.html',
				controller: 'homeCtrl',
				controllerAs: 'home',
				resolve: {
					books: function(dtlBridge) {
						return dtlBridge.getLibraryBooks();
					}
				}
			});
			$routeProvider.when('/Load', {
				templateUrl: 'app/splashscreen/templates/views/splash.html',
				controller: 'splashCtrl',
				controllerAs: 'splash'
			});
			$routeProvider.otherwise({ redirectTo: '/Load' });
		})
		.config(function ($logProvider, CONFIG) {
			$logProvider.debugEnabled(CONFIG.DEBUG);
		});
})();