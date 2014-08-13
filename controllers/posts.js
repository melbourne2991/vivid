var Post = require('../model/Post');

var PostsController = module.exports = {};

PostsController.showPosts = function(req, res) {
	Post.find({}, function() {

	});
};

PostsController.createPost = function(req, res) {
	var title = req.body.title;
	var content = req.body.content;

	var post = new Post({
		title: title,
		content: content,
		_user: req.user
	});

	post.save(function(err) {
		if(err.errors) {
			res.json(errors);
			return;
		} else if(err) {
			console.log(err);
			return;
		}

		res.json({success: true});
	})
};