const express = require("express");
// const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getAllProducts,
  getParticularProduct,
  createProduct,
  editProduct,
  deleteProduct,
} = require("../Controllers/product.controller.js");

router.get("/", getAllProducts);
router.get("/id", getParticularProduct);

router.post("/", createProduct);

router.put("/id", editProduct);

router.delete("/id", deleteProduct);

module.exports = router;
