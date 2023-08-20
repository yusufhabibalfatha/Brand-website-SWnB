// Package
const express = require('express')
// Module
const { postCheckout } = require('../controller/CheckoutController')
// Init
const router = express.Router()
// POST Checkout
router.post('/', postCheckout)

module.exports = router
