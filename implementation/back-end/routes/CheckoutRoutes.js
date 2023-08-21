// Package
const express = require('express')
// Module
const { postCheckout, getTransaction, getProductTransaction } = require('../controller/CheckoutController')
// Init
const router = express.Router()
// POST Checkout
router.post('/', postCheckout)
// GET checkout
router.get('/transaction', getTransaction)
// GET checkout item or product
router.get('/transaction/:transaction_id', getProductTransaction)

module.exports = router
