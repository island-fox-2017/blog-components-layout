'use-strict'
var express = require('express')
var router = express.Router()
var data = require('../controller/articles')
var articles = require('../models/articles')

router.get('/', data.getData)
router.get('/:id', data.getOneData)
router.post('/', data.insertData)
router.put('/:id', data.updateArticles)
router.delete('/:id', data.deleteArticles)

module.exports = router
