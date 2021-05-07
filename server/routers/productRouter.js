const express = require("express");
const productRout = express.Router();
const Product = require("../models/products.js");
const multer = require('multer')
const upload = multer({dest: './upload'})

const storage = ({
  destination: (req, file, cb)=>{
    cb(null, './upload/')
  }, 
  filename: (req, file, cb)=>{
    cb(null, new Date().toIsoStrin()+file.filename)
  }

})


productRout.get("/", async (req, res) => {
  try {
    const product = await Product.find({});
    if (product.length !== 0) {
      res.status(200).json(product);
    } else {
      res.status(200).json({ message: "The Product section is Empty" });
    }
  } catch (error) {
    res.json(error);
  }
});

productRout.post("/", upload.single('img'), async (req, res) => {
  console.log(req.file)
 
  // try {
  //   const createProduct = await new Product({
  //     name: req.body.name,
  //     price:req.body,
  //     img:req.file.path,
  //     discount:req.body,
  //     desc:req.body.desc,
  //     countInStock: req.body.countInStock,
  //     ingredientes:req.body.ingredientes, 
  //     raiting:req.body,
  //     numReview:req.body.numReview,
  //     featured: req.body.featured,
  //     isVegan: req.body.isVegan,
  //   });
      
  //   createProduct.save();
  //   res.status(201).json({
  //     message: `The category-${createProduct.name}- is successfully created`,
  //   });
  // } catch (error) {
  //   res.status(400).json(error);
  // }
});

productRout.delete("/:id", async (req, res) => {
  const proId = req.params.id;
  try {
    const proDeleted = await Product.remove({ _id: catId });

    res.status(201).json(proDeleted);
  } catch (error) {
    res.status(500).json(error);
  }
});


module.exports = productRout;
