const express = require('express')
const router = express.Router()
const productController = require('../controller/products')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/')
    }, 
    filename: function (req, file, cb){
        cb(null, new Date().toISOString()+ file.filename)
    }

})
const upload = multer({
    storage:storage
})



router.get('/', upload.single('imageURI'), productController.get_all_products)
router.post('/', productController.post_products)

module.exports = router