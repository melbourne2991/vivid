'use strict';

var app = angular.module('app', [
	'ngAnimate',
	'ui.router',
	'app.services',
	'app.directives',
	'app.controllers'
]).config(['$httpProvider', '$stateProvider', '$urlRouterProvider', function($httpProvider, $stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('', '/');

	$stateProvider
		.state('home', {
			templateUrl: '/templates/home.html',
			controller: 'HomeController',
			url: '/',
		})
		.state('login', {
			templateUrl: '/templates/login.html',
			controller: 'LoginController',
			url: '/login'
		})
		.state('admin', {
			templateUrl: '/templates/admin.html',
			controller: 'AdminController',
			url: '/admin'
		});

	$httpProvider.interceptors.push(function($injector) {
		return {
			request: function(config) {
				return config;
			},
			response: function(response) {
				return response;
			},
			responseError: function(response) {
				if(response.status === 403) $injector.get('$state').go('login');
			}
		}
	});
}]);

