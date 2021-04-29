const Product = require('../model/products')

exports.get_all_products = (req, res, next) => {
    Product.find()
    .exec()
    .then((result) => {
        res.status(200).json(result.data)
    } )
    .catch((err)=>{
        res.status(400).json(err)
    })
}

exports.post_products = (req, res, next)=>{
    const product = new Product({
        name: req.body.name,
        description:req.body.description,
        price: req.body.price,
        countInStock: req.body.countInStock,
        imageURI: req.file.path,
        createdAt: req.body.createdAt,
        feachered: req.body.feachered,
        discount: req.body.discount,
        newPrice: req.body.newPrice,
        barand: req.body.barand,
        category: req.body.categoryId,
    })
    product.save()
    .then((result) =>{
        res.status(201).json(result)
    })
    .catch(err=>{
        res.status(400).json(err)
    })
}