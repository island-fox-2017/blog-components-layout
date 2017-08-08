const Article = require('../models/article')

function getAllArticle(req, res) {
  Article.find({})
  .then(allArticleDatas => {
    res.status(200).send(allArticleDatas)
  })
  .catch(err => {
    res.status(400).send(err)
  })
}

function getOneArticle(req, res) {
  Article.find({
    _id: req.params.id
  })
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
    res.status(400).send(err)
  })
}

function createNewArticle(req, res) {
  Article.create({
    title: req.body.title,
    author: req.body.author,
    article_content: req.body.article_content
  })
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
    res.status(400).send(err)
  })
}

function updateSpecifiedArticle(req, res) {
  Article.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    author: req.body.author,
    article_content: req.body.article_content
  })
  .then(newData => {
    res.status(200).send(newData)
  })
  .catch(err => {
    res.status(400).send(err)
  })
}

function deleteSpecifiedArticle(req, res) {
  Article.remove({
    _id: req.params.id
  })
  .then(dataDeleted => {
    res.status(200).send(dataDeleted)
  })
  .catch(err => {
    res.status(400).send(err)
  })
}

module.exports = {
  getAllArticle,
  getOneArticle,
  createNewArticle,
  updateSpecifiedArticle,
  deleteSpecifiedArticle
}
