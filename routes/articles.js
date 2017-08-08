const express = require('express')
const router = express.Router();
const Controller = require('../controllers/article_controller')

router.get('/', Controller.getAll)
router.post('/', Controller.createArticle)
router.get('/:id', Controller.findArticle)
router.put('/:id', Controller.updateArticle)
router.delete('/:id', Controller.deleteArticle)
router.delete('/', Controller.deleteArticles)


module.exports = router ;
