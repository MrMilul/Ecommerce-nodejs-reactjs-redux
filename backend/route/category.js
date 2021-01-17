const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
const Category = require('../model/category')

router.get('/', (req, res, next)=>{
    Category.find()
    .exec()
    .then(result=>{
        res.status(200).json({result})
    })
    .catch(err=>{
        res.status(400).json({
            message: err.message
        })
    })
})

router.post('/', (req, res, next)=>{
    const category = new Category({
        category: req.body.category
    }) 
    category.save()
    .then((result) =>{
        res.status(201).json(result)
    })
    .catch(err =>{
        res.status(400).json({
            message: err.message,
        })
    })
})

module.exports = router
