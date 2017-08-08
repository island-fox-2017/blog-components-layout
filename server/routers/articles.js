const express = require('express')
const router = express.Router()
const articleCont = require('../controllers/articleController')

router.get('/', articleCont.getAllArticle)
router.get('/:id', articleCont.getOneArticle)
router.post('/', articleCont.createNewArticle)
router.put('/:id', articleCont.updateSpecifiedArticle)
router.delete('/:id', articleCont.deleteSpecifiedArticle)

module.exports = router
