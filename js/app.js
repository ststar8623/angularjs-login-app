var app = angular.module('loginApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'views/login.html'
		})
		.when('/signup', {
			templateUrl: 'views/signup.html'
		})
		.when('/forgot', {
			templateUrl: 'views/forgot.html'
		})
		.when('/back', {
			redirectTo: '/'
		})
		.otherwise({
			redirectTo: '/'
		})
});