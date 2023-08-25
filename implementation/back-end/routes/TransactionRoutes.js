// Package
const express = require("express");
// Module
const {
  postTransaction,
  getTransaction,
  getProductTransaction,
  getTransactionReceipt,
} = require("../controller/TransactionController");
const { uploadReceiptImage } = require("../middleware/uploadImages");
// Init
const router = express.Router();
// POST Transaction
router.post("/", uploadReceiptImage.single("image"), postTransaction);
// GET Transaction
router.get("/transaction", getTransaction);
// GET Transaction item or product
router.get("/transaction/:transaction_id", getProductTransaction);
// GET image receipt
router.get("/receipt/:receipt_name", getTransactionReceipt);

module.exports = router;
