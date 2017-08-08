"use strict"

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: {
    type: String,
    required: false
  },
  author: {
    type: String,
    required: false
  },
  article: {
    type: String,
    required: false
  }
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
