"use strict";

/**
 * Definition of the app basic configuration
 */
var dtl = angular.module('dtl', [
		"ngRoute",
		"ng.deviceDetector"
	])
	.config(function ($routeProvider) {
		$routeProvider.when("/Home", {
			templateUrl: "app/homepage/templates/views/home.html"
		});
		$routeProvider.otherwise({ redirectTo: '/Home' });
	})
	.config(function ($logProvider) {
		$logProvider.debugEnabled(true);
	})
	.config(function ($locationProvider) {
		$locationProvider.html5Mode(true);
	})