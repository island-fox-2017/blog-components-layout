const express = require('express')
const router = express.Router()
const controller = require('../controllers/articleController')

router.get('/', controller.getAllArticle)
router.get('/:id', controller.findArticle)
router.post('/', controller.createArticle)
router.put('/:id', controller.updateArticle)
router.delete('/:id', controller.deleteArticle)

module.exports = router
