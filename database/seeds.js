var User = require('../model/User');
var _    = require('lodash');

module.exports = function(app) {
	// Create Superuser
	var master_user_exists = User.find({
		email: 'wleach1992@gmail.com'
	}).exec(function(err, users) {
		if(err) throw err;

		if(users.length > 1) {
			_.forEach(users, function(user) {
				// user.delete
			});
		} else if(users.length < 1) {
			var password = User.generateHash('jimmypq79');

			var user = new User({
				email: 'wleach1992@gmail.com',
				username: 'Will',
				password: password,
				roles: {
					admin: true
				}
			});

			user.save(function(err, user) {
				if(err) throw new Error(err);
			});
		} else {
			console.log('User already exists');
		}
	});


}