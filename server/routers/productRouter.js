const express = require("express");
const productRoute = express.Router();
const Product = require("../models/products.js");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({ storage: storage });

productRoute.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    if (products.length === 0) {
      console.log("empty")
      res.json({message:"the Product section is Empty"})
    } else {
      console.log("products")
    }
  } catch (error) {
    res.json(error)
  }
});

productRoute.post("/", upload.single("img"), async (req, res) => {
  try {
    const createProduct = await new Product({
      name: req.body.name,
      price: req.body,
      img: req.file.path,
      discount: req.body,
      desc: req.body.desc,
      countInStock: req.body.countInStock,
      ingredientes: req.body.ingredientes,
      raiting: req.body,
      numReview: req.body.numReview,
      featured: req.body.featured,
      isVegan: req.body.isVegan,
    });

    createProduct.save();
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
    const proDeleted = await Product.remove({ _id: proId });

    res.status(201).json(proDeleted);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = productRoute;
