// Package
const express = require("express");
// Module
const { getAllProducts } = require("../controller/ProductsController");
// Init
const router = express.Router();
// GET all prodcuts
router.get("/", getAllProducts);

module.exports = router;
