const express = require('express');
const router = express.Router();
const userCont = require('../controllers/userController')

router.get('/', userCont.getAllUser);
router.get('/:id', userCont.getSpecifiedUser);

module.exports = router;
