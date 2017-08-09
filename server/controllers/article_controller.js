const Article = require('../models/article_model');

let getAll = (req, res) => {
  Article.find({}, (err, result) => {
    if(err){
      res.send(err.message);
    }
    console.log("Found the article records: ");
    console.log(result);
    res.send(result)
  })
}

let createArticle = (req, res) => {
  Article.create({
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    description: req.body.description
  }, (err, result) => {
    if(err){
      res.send(err.message);
    }
    console.log("Insert new article: ");
    console.log(result);
    res.send(result)
  })
}

let findArticle = (req, res) => {
  Article.findOne({
    _id: req.params.id
  })
  .then(log => res.send(log))
  .catch(err => res.send(err.message))
}

let updateArticle = (req, res) => {
  Article.find({
    _id: req.params.id
  }, (err, article) => {
    Article.update({
      _id: article[0]._id
    }, {
      $set: {
        title: req.body.title || article[0].title,
        author: req.body.author || article[0].author,
        category: req.body.category || article[0].category,
        description: req.body.description || article[0].description
      }
    }, (err, result) => {
      if(err) return res.send(err.message)
      res.send(result)
    })
  })
}

let deleteArticle = (req, res) => {
  Article.deleteOne({
    _id: req.params.id
  }, (err, result) => {
    if(err){
      res.send(err.message)
    }
    console.log("Delete: ");
    console.log(result);
  })
}


let deleteArticles = (req, res) => {
  Article.remove({}, (err, result) => {
    if(err){
      res.send(err.message)
    }
    console.log("Delete all articles: ");
    console.log(result);
    res.send(result)
  })
}

module.exports = {
  getAll,
  createArticle,
  findArticle,
  updateArticle,
  deleteArticle,
  deleteArticles
};
