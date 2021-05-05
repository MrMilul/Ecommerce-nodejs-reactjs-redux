const express = require("express");
const categoryRoute = express.Router();
const Category = require("../models/category.js");

categoryRoute.get("/", async (req, res) => {
  try {
    const category = await Category.find({});
    if (category.length !== 0) {
      res.status(200).json(category);
    } else {
      res.status(200).json({ message: "The Category section is Empty" });
    }
  } catch (error) {
    res.json(error);
  }
});

categoryRoute.post("/", async (req, res) => {
  try {
    const createProduct = await new Category({
      name: req.body.name,
    });

    createProduct.save();
    res.status(201).json({
      message: `The category-${createProduct.name}- is successfully created`,
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

categoryRoute.delete("/:id", async (req, res) => {
  const catId = req.params.id;
  try {
    const catDeleted = await Category.remove({ _id: catId });

    res.status(201).json(catDeleted);
  } catch (error) {
    res.status(500).json(error);
  }
});

categoryRoute.patch("/:id", async (req, res) => {
  try {
    const catUpdated = await Category.update(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.newName,
        },
      }
    );
    res.status(201).json(catUpdated);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = categoryRoute;
