"use strict"

var model = require('../models/articleSchema');

let findAllArticles = (req, res, next) => {
  model.find()
  .then(articles => {
    res.send(articles)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

let findArticleById = (req, res, next) => {
  model.findOne({
    _id: req.params.id
  })
  .then(article => {
    res.send(article);
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

let postArticle = (req, res, next) => {
  model.create({
    title: req.body.title,
    author: req.body.author,
    article: req.body.article
  })
  .then(posted_article => {
    res.send(posted_article)
  })
  .catch(err => {
    console.log(err);
  })
}

let removeArticle = (req, res, next) => {
  model.deleteOne({
    _id: req.params.id
  })
  .then(() => {
    res.send('Remove success')
  })
  .catch(err => {
    res.status(500).send(err);
  })
}

let editArticle = (req, res, next) => {
  model.updateOne({
    _id: req.params.id
  }, {
    title: req.body.title,
    author: req.body.author,
    article: req.body.article
  })
  .then(article_updated => {
    res.send(article_updated);
  })
  .catch(err => {
    res.status(500).send(err);
  })
}

module.exports= {
  findAllArticles,
  postArticle,
  findArticleById,
  removeArticle,
  editArticle
}
