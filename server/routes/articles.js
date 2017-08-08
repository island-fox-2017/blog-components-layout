var express = require('express');
var router = express.Router();
var controller = require('../controllers/articleCont');

router.get('/', controller.findAllArticles);

router.get('/:id', controller.findArticleById);

router.post('/', controller.postArticle);

router.delete('/:id', controller.removeArticle);

router.put('/:id', controller.editArticle);

module.exports = router;
