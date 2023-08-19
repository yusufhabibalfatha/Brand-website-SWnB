// Package
const express = require('express')
// Init
const app = express()
// ==>
app.get('/', (req, res) => {
    res.json({ msg: 'hsii' })
})
app.listen(4000, () => {
    console.log('haii')
    console.log('the hole')
})