// Package
const express = require("express");
const { createAdmin, loginAdmin } = require("../controller/AdminController");
// Init
const router = express.Router();
// ==>
// CREATE acccount admin
router.post("/create", createAdmin);
// CHECK account admin
router.post("/login", loginAdmin);

module.exports = router;
