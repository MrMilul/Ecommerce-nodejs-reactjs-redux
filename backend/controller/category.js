const Category = require('../model/category')

exports.category_get_all = (req, res, next)=>{
    Category.find()
    .exec()
    .then(result=>{
        const response = {
            count: result.length,
            data: result.map(result=>{
                return{
                    id: result._id,
                    category: result.category,
                }
            })
        }
        res.status(200).json(response)
    })
    .catch(err=>{
        res.status(400).json({
            message: err.message
        })
    })
}

exports.category_post = (req, res, next)=>{
    const category = new Category({
        category: req.body.category
    }) 
    category.save()
    .then((result) =>{
        const response = {
            message: `${result.category} category is created successfully`
        }
        res.status(201).json(response)
    })
    .catch(err =>{
        res.status(400).json({
            message: err.message,
        })
    })
}