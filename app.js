var express		= require('express');
var app 		= express();
var mongoose 	= require('mongoose');
var bodyParser 	= require('body-parser');
var cookieParser = require('cookie-parser');
var sessions	= require('cookie-session');
var passport	= require('./config/passport');
var routes 		= require('./routes');
var User 		= require('./model/User');
var seeds 		= require('./database/seeds');

mongoose.connect('mongodb://localhost/myblog', function(err) {
	if(err) throw err;
});

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

app.use(bodyParser.json()); 
app.use(cookieParser('sk393lxdj3403939ckknxmxkdjdK32234dml'));
app.use(sessions({secret: 'sk393lxdj3403939ckknxmxkdjdK32234dml'}));
app.use(passport.initialize());
app.use(passport.session());

routes(app, passport);
seeds();


app.use(express.static(__dirname + '/public'));

if(app.listen(3000)) console.log('App Listening on ' + '3000');


