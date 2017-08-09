var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  author: String,
  title: String,
  description: String
}, {
  versionKey: false
}, {
  timestamps: true
})

var article = mongoose.model('article', articleSchema);

module.exports = article;
