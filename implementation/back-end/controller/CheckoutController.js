// Module
const connectDB = require('../database/database')
const { postCustomer, postTransaction,postTransactionItems } = require('../model/CheckoutModel')
// POST checkout
const postCheckout = async (req, res) => {
    const customer = {
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        address: req.body.address
    }
    customer.id = await postCustomer(customer)
    const transaction = {
        message: req.body.message,
        customer_id: customer.id
    }
    transaction.id = await postTransaction(transaction)
    const transactionItems = req.body.items
    await postTransactionItems(transaction.id, transactionItems)
}
// GET checkout
const getTransaction = async (req, res) => {
    const mysql = await connectDB()
    const query = `
    SELECT transaction.id as ID, name, email, phone_number, address, message FROM transaction 
    INNER JOIN customer 
        ON transaction.customer_id=customer.id`
    const [rows, fields] = await mysql.query(query)
    res.status(200).json({rows})
}
// GET product transaction
const getProductTransaction = async (req, res) =>{
    const transaction_id = req.params.transaction_id
    const mysql = await connectDB()
    const query = `
    SELECT * FROM transactionitem
    WHERE transaction_id='${transaction_id}'`
    const [rows, fields] = await mysql.query(query)
    res.status(200).json({rows})
}
module.exports = { postCheckout, getTransaction, getProductTransaction }