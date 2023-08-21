// Package
const express = require('express')
const cors = require('cors')
const path = require('path')
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

// app.post('/coba', upload.single('image'),(req, res) => {
//     console.log('-----')
//     console.log('the hole')
//     try{
//         console.log(req.file)
//         console.log('req.body => ', req.body.items)
//         res.status(200).json({ msg: 'memek'})
//     }catch(err){
//         console.log('ERROR => ', err)
//     }
// })
app.listen(process.env.PORT_SERVER, async () => {
    console.log('Listen to the port...')
})