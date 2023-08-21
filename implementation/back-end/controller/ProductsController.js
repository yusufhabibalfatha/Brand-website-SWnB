// Module
const connectDB = require('../database/database')
// get all product
const getAllProduct = async (req, res) => {
    const mysql = await connectDB()
    const [rows, fields] = await mysql.query('SELECT * FROM products')
    res.status(200).json({ result : rows })
}

module.exports = { getAllProduct }