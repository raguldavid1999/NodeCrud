const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const env = require("./env/product.env.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

// app.get("/api/products", async (req, res) => {
//   try {
//     const product = await Product.find({});
//     res.status(200).json(product);
//   } catch (err) {
//     console.log(err, "error");
//     res.status(500).send({
//       message: err.message,
//     });
//   }
// });

// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (err) {
//     console.log(err, "error");
//     res.status(500).send({
//       message: err.message,
//     });
//   }
// });

// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (err) {
//     console.log(err, "error");
//     res.status(500).send({
//       message: err.message,
//     });
//   }
// });

// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       res.status(404).send({
//         message: "Product not found",
//       });
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (err) {
//     console.log(err, "error");
//     res.status(500).send({
//       message: err.message,
//     });
//   }
// });

// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id, req.body);
//     if (!product) {
//       res.status(404).send({
//         message: "Product not found",
//       });
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (err) {
//     console.log(err, "error");
//     res.status(500).send({
//       message: err.message,
//     });
//   }
// });

mongoose
  .connect(env.mongoDbLink)
  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });
