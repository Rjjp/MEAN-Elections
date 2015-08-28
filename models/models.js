var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String, //hash created from password
    created_at: {type: Date, default: Date.now}
});

var voteSchema = new mongoose.Schema({
    created_by: String,
    created_at: {type: Date, default: Date.now},
    vote_for: String
});

mongoose.model('Vote', voteSchema);
mongoose.model('User', userSchema);