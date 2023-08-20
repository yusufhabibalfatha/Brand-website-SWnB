// Package
const express = require('express')
const cors = require('cors')
// Module
const db = require('./database/database')
const ProductsRoutes = require('./routes/ProductsRoutes')
const CheckoutRoutes = require('./routes/CheckoutRoutes')
// Init
const app = express()
app.use(cors())
app.use(express.json())
// ==>
app.use('/products', ProductsRoutes)
app.use('/checkout', CheckoutRoutes)
app.listen(process.env.PORT_SERVER, () => {
    db.connect(() => {
        console.log('db connected')
    })
})