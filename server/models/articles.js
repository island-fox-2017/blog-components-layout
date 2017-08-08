'use-strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articlesSchema = new Schema({
  title:  String,
  category : String,
  author: String,
  content:   String,
  date: { type: Date, default: Date.now },
});

var Articles = mongoose.model('Articles', articlesSchema);
module.exports = Articles;
