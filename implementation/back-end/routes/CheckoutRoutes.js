// Package
const express = require('express')
// Module
const { postCheckout, getTransaction, getProductTransaction, getCheckoutReceipt } = require('../controller/CheckoutController')
const upload = require('../middleware/uploadImage')
// Init
const router = express.Router()
// POST Checkout
router.post('/', upload.single('image'),postCheckout)
// GET checkout
router.get('/transaction', getTransaction)
// GET checkout item or product
router.get('/transaction/:transaction_id', getProductTransaction)
// GET image receipt
router.get('/receipt/:receipt_name', getCheckoutReceipt)

module.exports = router
