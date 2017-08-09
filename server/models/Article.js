const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  author:{
    type: String,
    required: true
  },
  content:{
    type: String,
    required: true
  }
}, {
  timestamps: {
    createdAt: 'created_at'
  }
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article