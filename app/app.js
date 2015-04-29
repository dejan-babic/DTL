"use strict";

/**
 * Definition of the app basic configuration
 */
var dtl = angular.module('dtl', [
		"ngRoute",
		"ng.deviceDetector"
	])
	.config(function ($routeProvider) {
		$routeProvider.when("/home", {
			templateUrl: "app/homepage/templates/views/home.html"
		});
		$routeProvider.when("/init", {
			templateUrl: "app/splashscreen/templates/views/splash.html"
		});
		$routeProvider.otherwise({ redirectTo: '/init' });
	})
	.config(function ($logProvider) {
		$logProvider.debugEnabled(true);
	})