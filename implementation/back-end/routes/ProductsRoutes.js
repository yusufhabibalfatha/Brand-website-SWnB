// Package
const express = require("express");
// Module
const {
  getAllProducts,
  postProduct,
} = require("../controller/ProductsController");
const { uploadProductImage } = require("../middleware/uploadImages");
// Init
const router = express.Router();
// GET all prodcuts
router.get("/", getAllProducts);
// POST product
router.post("/", uploadProductImage.single("image"), postProduct);

module.exports = router;
