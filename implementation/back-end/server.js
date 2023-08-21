// Package
const express = require('express')
const cors = require('cors')
const path = require('path')
const fs = require('fs')
const readFile = require('node:fs/promises')
// Module
const connectDB = require('./database/database')
const ProductsRoutes = require('./routes/ProductsRoutes')
const CheckoutRoutes = require('./routes/CheckoutRoutes')
let upload = require('./middleware/uploadImage')
// Init
const app = express()
app.use(cors())
app.use(express.json())

// ==>
app.use('/products', ProductsRoutes)
app.use('/checkout', CheckoutRoutes)
app.use('/receipt', express.static(path.join(__dirname, 'image')))

app.listen(process.env.PORT_SERVER, async () => {
    console.log('Listen to the port...')
})