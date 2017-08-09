const Article = require('../models/Article')

function getAllArticle(req, res) {
  Article.find()
  .then(result => res.send(result))
  .catch(err => res.send(err.message))
}

function createArticle(req, res) {
  Article.create({
    name: req.body.name,
    author: req.body.author,
    content: req.body.content
  })
  .then(log => res.send(log))
  .catch(err => res.send(err.message))
}

function findArticle(req, res) {
  Article.findOne({
    _id: req.params.id
  })
  .then(row => res.send(row))
  .catch(err => res.send(err.message))
}

function deleteArticle(req, res) {
  Article.deleteOne({
    _id: req.params.id
  })
  .then(log => res.send(log))
  .catch(err => res.send(err.message))
}

function updateArticle(req, res) {
  Article.find({
    _id: req.params.id
  }, function(err, row) {
    Article.update({
      _id: row[0]._id
    }, {
      $set: {
        name: req.body.name || row[0].name,
        author: req.body.author || row[0].author,
        content: req.body.category || row[0].content
      }
    }, function(err, result) {
      if (err) return res.send(err.message)
      res.send(result)
    })
  })
}

module.exports = {
  getAllArticle,
  createArticle,
  findArticle,
  deleteArticle,
  updateArticle
}