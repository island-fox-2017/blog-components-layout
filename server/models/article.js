const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Judul article tidak boleh kosong'],
    minlength: [2, 'Judul article tidak boleh terlalu pendek']
  },
  author: {
    type: String,
    required: [true, 'Author tidak boleh kosong']
  },
  article_content: {
    type: String
  },
},{
  timestamps: true
})

const Article = mongoose.model('Article', articleSchema);

module.exports = Article
