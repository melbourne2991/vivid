var passport 		 = require('passport');
var LocalStrategy 	 = require('passport-local');
var FacebookStrategy = require('passport-facebook');
var User 			 = require('../model/User');

passport.use(new LocalStrategy(function(username, password, done) {
	User.findOne({ username: username}, function(err, user) {
		if(err) return done(err);

		var checkPass = function(user) {
			if(user.validPassword(password)) {
				return done(null, user);
			} else {
				return done(null, false, { error: 'Incorrect Password' });
			}
		}

		if(!user) {
			console.log(username);
			User.findOne({ email: username }, function(err, user) {
				if(err) return done(err);

				if(!user) {
					return done(null, false, {error: 'Could not find a user with that username or email'});
				} else {
					checkPass(user);
				}
			});
		}
	});
}));

module.exports = passport;