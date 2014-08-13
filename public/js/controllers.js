var controllers = angular.module('app.controllers', ['app.services']);

controllers.controller('MainController', ['$scope', function($scope) {

}]);

controllers.controller('HomeController', ['$scope', function($scope) {
	$scope.posts = [
		{title: 'Hello I am post', content: 'There was a meteorite that went bang and made lots of smoke and the smoke was dark gray.', date: '29/02/1992'},
		{title: 'Hello I am post', content: 'There was a meteorite that went bang and made lots of smoke and the smoke was dark gray.', date: '29/02/1992'},
		{title: 'Hello I am post', content: 'There was a meteorite that went bang and made lots of smoke and the smoke was dark gray.', date: '29/02/1992'},
		{title: 'Hello I am post', content: 'There was a meteorite that went bang and made lots of smoke and the smoke was dark gray.', date: '29/02/1992'},
		{title: 'Hello I am post', content: 'There was a meteorite that went bang and made lots of smoke and the smoke was dark gray.', date: '29/02/1992'},
		{title: 'Hello I am post', content: 'There was a meteorite that went bang and made lots of smoke and the smoke was dark gray.', date: '29/02/1992'},
		{title: 'Hello I am post', content: 'There was a meteorite that went bang and made lots of smoke and the smoke was dark gray.', date: '29/02/1992'},
		{title: 'Hello I am post', content: 'There was a meteorite that went bang and made lots of smoke and the smoke was dark gray.', date: '29/02/1992'},
		{title: 'Hello I am post', content: 'There was a meteorite that went bang and made lots of smoke and the smoke was dark gray.', date: '29/02/1992'},
		{title: 'Hello I am post', content: 'There was a meteorite that went bang and made lots of smoke and the smoke was dark gray.', date: '29/02/1992'},
		{title: 'Hello I am post', content: 'There was a meteorite that went bang and made lots of smoke and the smoke was dark gray.', date: '29/02/1992'},
		{title: 'Hello I am post', content: 'There was a meteorite that went bang and made lots of smoke and the smoke was dark gray.', date: '29/02/1992'},
		{title: 'Hello I am post', content: 'There was a meteorite that went bang and made lots of smoke and the smoke was dark gray.', date: '29/02/1992'},
		{title: 'Hello I am post', content: 'There was a meteorite that went bang and made lots of smoke and the smoke was dark gray.', date: '29/02/1992'},
		{title: 'Hello I am post', content: 'There was a meteorite that went bang and made lots of smoke and the smoke was dark gray.', date: '29/02/1992'},
		{title: 'Hello I am post', content: 'There was a meteorite that went bang and made lots of smoke and the smoke was dark gray.', date: '29/02/1992'},
		{title: 'Hello I am post', content: 'There was a meteorite that went bang and made lots of smoke and the smoke was dark gray.', date: '29/02/1992'}
	];
}]);

controllers.controller('LoginController', ['$scope', function($scope) {
	console.log('controller');
}]);

controllers.controller('AdminController', ['$scope', 'currentUser', 'Login', function($scope, currentUser, Login) {
	console.log(currentUser);
	
	Login.testAuth().then(function(data) {
		console.log(data);
	});
}]);