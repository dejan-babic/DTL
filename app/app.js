"use strict";

var dtl = angular.module('dtl', [
		"ngRoute"
	])
	.config(function ($routeProvider) {
		$routeProvider.when("/Home", {
			templateUrl: "templates/views/home.html"
		});
		$routeProvider.otherwise({ redirectTo: '/Home' });
	})
	.config(function ($logProvider) {
		$logProvider.debugEnabled(true);
	});