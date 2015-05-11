(function(){
	'use strict';

	/**
	 * Definition of the app & basic configuration
	 */
	angular.module('dtl', [
			'ngRoute',
			'ng.deviceDetector'
		])
		.config(function ($routeProvider) {
			$routeProvider.when('/Home', {
				templateUrl: 'app/homepage/templates/views/home.html'
			});
			$routeProvider.when('/Load', {
				templateUrl: 'app/splashscreen/templates/views/splash.html',
				controller: 'splashCtrl',
				controllerAs: 'splash'
			});
			$routeProvider.otherwise({ redirectTo: '/Load' });
		})
		.config(function ($logProvider) {
			$logProvider.debugEnabled(true);
		});
})();
