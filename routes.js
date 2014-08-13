var UsersController = require('./controllers/users');
var PostsController = require('./controllers/posts');
var authenticate = require('./middlewares/authenticate');

var routes = module.exports = function(app, passport) {
	// Users
	app.post('/user', UsersController.createUser);
	app.post('/login', UsersController.login);
	app.get('/logout', UsersController.logout);

	// Posts
	app.get('/posts', PostsController.showPosts);
	app.post('/post', authenticate, PostsController.createPost);

	return app;
}


