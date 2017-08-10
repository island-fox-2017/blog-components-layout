var express = require('express')
var router = express.Router();
var controller = require('../controller/articleController')

// find all
router.get('/', controller.findAllArticle)

//find one
router.get('/:id', controller.findByIdArticle)

//update
router.put('/:id', controller.editByIdArticle)

// delete
router.delete('/:id', controller.deleteByIdArticle)

// create/insert/add
router.post('/', controller.createArticle)

module.exports = router
