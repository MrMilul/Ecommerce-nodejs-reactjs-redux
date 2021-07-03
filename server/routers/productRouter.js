const express = require("express");
const productRoute = express.Router();
const Products = require("../models/products");
const data1 = require('../models/data')
const data = require('../data.js')
const multer = require("multer");
const products = require("../models/products");
const { json } = require("body-parser");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/upload/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({ storage: storage });




productRoute.get("/seed", async(req,res)=>{
    try {
    const products = await Products.find({});
    if (products.length === 0) {
      
      res.json({message:"the Product section is Empty"})
    } else {
      res.json(products)
    }
  } catch (error) {
    res.json(error)
  }

})

productRoute.get("/seed/:id", async(req, res)=>{
  const productId = req.params.id
  try{
    const product = await Products.findById({_id: productId})
    res.status(200).json(product)
  }catch(error){
    res.status(400).json({message: error})
  }
})


productRoute.post("/", upload.single("img"), async (req, res) => {
  try {
    const product = new Products({
      name: req.body.name,
      price: req.body,
      img: req.file.path,
      desc: req.body.desc,
      countInStock: req.body.countInStock,
      raiting: req.body,
      numReview: req.body.numReview,
      featured: req.body.featured,
    });

    const createProduct = await product.save();
    res.status(201).json({
      message: `The category-${createProduct.name}- is successfully created`,
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

productRoute.delete("/:id", async (req, res) => {
  const proId = req.params.id;
  try {
    const proDeleted = await Products.remove({ _id: proId });

    res.status(201).json(proDeleted);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = productRoute;
