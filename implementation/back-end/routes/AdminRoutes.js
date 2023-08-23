// Package
const express = require("express");
const { createAdmin, loginAdmin } = require("../controller/AdminController");
// Init
const router = express.Router();
// ==>
// CHECK account admin
router.post("/login", loginAdmin);
// CREATE acccount admin
router.post("/create", createAdmin);

module.exports = router;
