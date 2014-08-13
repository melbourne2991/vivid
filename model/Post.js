module.exports = function() {
	var mongoose = require('mongoose');

	var schema = new mongoose.Schema({
		title: String,
		content: String,
		tags: Array,
		user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		created_at: {type: Date, default: Date.now},
		updated_at: {type: Date, default: Date.now}
	});

	module.exports = mongoose.model('Post', schema);
}