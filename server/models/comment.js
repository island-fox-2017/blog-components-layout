'use-strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  name:  String,
  comment: String,
  date: { type: Date, default: Date.now },
});

var Comments = mongoose.model('Comments', commentSchema);
module.exports = Comments;
