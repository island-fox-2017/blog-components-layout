'use-strict'
var articles = require('../models/articles')


function getData(req, res) {
  articles.find({},(err,data)=>{
    if(!err){
      res.send(data)
    }else {
      res.send(err)
    }
  })
}
function getOneData(req, res) {
  articles.findById(req.params.id).
  then(data=>{
    res.send(data)
  })
  .catch(err=>{
    res.send(err)
  })
}

function insertData(req,res) {
  let articlesIn = new articles({
    title:  req.body.title,
    category : req.body.category,
    author: req.body.author,
    content:   req.body.content,
    date: new Date(),
  })

  articlesIn.save((err,log)=>{
    if(!err){
      res.send(log)
    }else {
      res.status(500).send(err)
    }
  })

}

function updateArticles(req,res){
  articles.update({
    _id : req.params.id
  },{
    $set :{
      category : req.body.category || articles.category,
      title : req.body.title||articles.category,
      author: req.body.author||articles.authors,
      content:  req.body.content||articles.content,
      date: new Date(),
    }
  },(err,data)=>{
    if (!err) {
      res.send(data)
    }else {
      res.send(err)
    }
  })
}

function deleteArticles(req,res) {
  articles.remove({_id : req.params.id},(err,log)=>{
    if(!err){
      res.send(log)
    }else{
      res.send(err)
    }
  })
}


module.exports = {getData,insertData,updateArticles,deleteArticles,getOneData};
