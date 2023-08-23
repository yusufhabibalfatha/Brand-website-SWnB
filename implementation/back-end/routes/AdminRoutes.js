// Package
const express = require("express");
const {
  createAdmin,
  loginAdmin,
  checkAdmin,
} = require("../controller/AdminController");
// Module
const adminAuth = require("../middleware/adminAuth");
// Init
const router = express.Router();
// ==>
// CHECK account admin
router.post("/login", loginAdmin);
// CREATE acccount admin
router.post("/create", createAdmin);
// CHECK admin auth
router.get("/", adminAuth, checkAdmin);

module.exports = router;
