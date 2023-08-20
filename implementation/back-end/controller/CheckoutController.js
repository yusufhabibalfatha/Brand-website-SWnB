// Module
const db = require('../database/database')
// POST checkout
const postCheckout = (req, res) => {
    db.query('SELECT * FROM products', (err, result, field) => {
        res.status(200).json({ result })
    })
}

module.exports = { postCheckout }