// Package
const express = require('express')
// Module
const { getAllProduct } = require('../controller/ProductsController')
// Init
const router = express.Router()
// GET all prodcuts
router.get('/', getAllProduct)

module.exports = router
