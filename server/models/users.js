'use-strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username:  String,
  email: String,
  role: String,
  password: String,
  key: String
});

var Users = mongoose.model('Users', userSchema);
module.exports = Users;
