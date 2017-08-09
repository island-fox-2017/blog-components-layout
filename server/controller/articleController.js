const article = require('../models/article')

//ok
function createArticle(req,res){
  article.create({
    author: req.body.author,
    title: req.body.title,
    description: req.body.description,
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function findByIdArticle(req, res){
  article.findOne({
    _id: req.params.id
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function deleteByIdArticle(req,res){
  article.deleteOne({
    _id:req.params.id
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function editByIdArticle(req,res){
  article.where({
    _id: req.params.id
  })
  .update({
    author: req.body.author,
    title: req.body.title,
    description: req.body.description
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function findAllArticle(req,res){
  article.find()
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  createArticle,
  findByIdArticle,
  deleteByIdArticle,
  editByIdArticle,
  findAllArticle
};
