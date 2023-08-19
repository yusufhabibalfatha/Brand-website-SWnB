// Package
const express = require('express')
// Module controller
// Init
const router = express.Router()
// GET all prodcuts
router.get('/', (req, res) => {
    console.log('this is all products')
})

module.exports = router
