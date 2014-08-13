var services = angular.module('app.services', ['ui.router']);

services.factory('Posts', [
	'$scope',
	'$http', 

	function($http) {
		return {
			findAll: function() {
				return $http.get('/posts/:page');
			}
		}
}]);

services.factory('Login', [
	'$http', 
	'currentUser',

	function($http, currentUser) {
		return {
			postLogin: function(data) {
				var errors = false;
				var user   = false;

				return $http.post('/login', data).then(function(results) {
					if(results && !results.data.error) {
						currentUser.loggedIn = true;
						currentUser.data = results.data;
						user = currentUser.data;
					} else if(results.data && results.data.error) {
						errors = {};
						errors['general'] = results.data.error;
					} else {
						errors = {};
						errors['general'] = 'Oops, something went wrong. Please refresh your page';
					}
					
					return {
						errors: errors,
						user: user
					}
				})
			},
			testAuth: function(data) {
				return $http.get('/test');
			} 
		}
}]);

services.value('currentUser', {
	loggedIn: false,
	data: {}
});