// Module
const db = require('../database/database')
// get all product
const getAllProduct = (req, res) => {
    db.query('SELECT * FROM products', (err, result, field) => {
        res.status(200).json({ result })
    })
}

module.exports = { getAllProduct }