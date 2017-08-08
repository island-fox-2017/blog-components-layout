'use strict'

var Article = require('../models/article');

var createArticle = (req,res)=>{
  Article.create({
    title: req.body.title,
    author: req.body.author,
    summary: req.body.summary,
    content: req.body.title
  },(err,result)=>{
    if (err) {
      res.send(err.message)
    }
    // console.log(result);
    res.send(result)
  })
}

var getAllArticle = (req,res)=>{
  Article.find({},(err,result)=>{
    if (err) {
      res.send(err.message)
    }
    // console.log(result);
    res.send(result);
  })
}

var findOneArticle = (req,res)=>{
  Article.findById(req.params.id,(err,data)=>{
    if (err) {
      res.send(err)
    }
    console.log(data);
    res.send(data)
  })
}

var updateArticle =(req,res)=>{
  Article.findById(req.params.id,(err,data)=>{
    if (err) {
      res.send(err.message)
    }    
    data.title = req.body.title || data.title;  
    data.author = req.body.author || data.author;  
    data.summary = req.body.summary || data.summary;  
    data.content = req.body.content || data.content;
    
    data.save((err,data)=>{
      if (err) {
        res.send(err)
      }
      res.send(data)
      console.log('data already update');
    })
  })
}

var deleteArticle= (req,res)=>{
  Article.findByIdAndRemove(req.params.id,(err)=>{
    if (err) {
      res.send(err.message)
    }
    res.send('data already delete')
  })
}

module.exports = {
  createArticle,
  getAllArticle,
  findOneArticle,
  deleteArticle,
  updateArticle
}