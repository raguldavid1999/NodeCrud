const Product = require("../models/product.model");
const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (err) {
    console.log(err, "error");
    res.status(500).send({
      message: err.message,
    });
  }
};

const getParticularProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    console.log(err, "error");
    res.status(500).send({
      message: err.message,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    console.log(err, "error");
    res.status(500).send({
      message: err.message,
    });
  }
};

const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      res.status(404).send({
        message: "Product not found",
      });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (err) {
    console.log(err, "error");
    res.status(500).send({
      message: err.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id, req.body);
    if (!product) {
      res.status(404).send({
        message: "Product not found",
      });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (err) {
    console.log(err, "error");
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  getAllProducts,
  getParticularProduct,
  createProduct,
  editProduct,
  deleteProduct,
};
