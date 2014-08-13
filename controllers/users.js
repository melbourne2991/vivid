var User = require('../model/User');
var passport = require('passport');

var UsersController = module.exports = {};

UsersController.createUser = function(req, res, next) {
	var data 			  = req.body;
	var unhashed_password = data.password;

	data.password = User.generateHash(unhashed_password);

	var user = new User(data);

	user.save(function(err) {
		if(err) {
			console.log(err);
		} else {
			res.send('user saved!');
		}
	});
}

UsersController.login = function(req, res, next) {
	passport.authenticate('local', { session: true }, function(err, user, info) {
		if(!user) {
			res.json(info);
		} else {
			req.logIn(user, function(err) {
				if(err) res.send(err);
				res.send(user);
			});
		}
	})(req, res, next);
}

UsersController.logout = function(req, res) {
	req.logout();
	res.json({success: true});
}