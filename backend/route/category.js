const express = require('express');
const router = express.Router()
const categoryController = require('../controller/category')

router.get('/', categoryController.category_get_all)

router.post('/',categoryController.category_post )

module.exports = router
