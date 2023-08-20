// Package
const express = require('express')
// Module
const { postCheckout, getCheckout } = require('../controller/CheckoutController')
// Init
const router = express.Router()
// POST Checkout
router.post('/', postCheckout)
// GET checkout
router.get('/:order_id', getCheckout)

module.exports = router
