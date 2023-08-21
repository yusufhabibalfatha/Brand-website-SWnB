// Module
const connectDB = require('../database/database')
const { postCustomer, postTransaction,postTransactionItems } = require('../model/CheckoutModel')
// POST checkout
const postCheckout = async (req, res) => {
    console.log('--------')
    console.log('req.body => ', req.body.items)
    console.log('req.file => ', req.file.filename)
    const customer = {
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        address: req.body.address
    }
    // ----- CHECK VALIDATION ------
    customer.id = await postCustomer(customer)
    const transaction = {
        message: req.body.message,
        amount: req.body.amount,
        customer_id: customer.id,
        receipt: req.file.filename
    }
    const transactionItems = JSON.parse(req.body.items)
    transaction.id = await postTransaction(transaction)
    await postTransactionItems(transaction.id, transactionItems)
    res.status(200).json({msg: 'done'})
}
// GET checkout
const getTransaction = async (req, res) => {
    const mysql = await connectDB()
    const query = `
    SELECT transaction.id as ID, name, email, phone_number, address, message, amount, receipt FROM transaction 
    INNER JOIN customer 
        ON transaction.customer_id=customer.id`
    const [rows, fields] = await mysql.query(query)
    // console.log('rows => ', rows)
    res.status(200).json({rows})
}
// GET product transaction
const getProductTransaction = async (req, res) =>{
    const transaction_id = req.params.transaction_id
    const mysql = await connectDB()
    const query = `
    SELECT name, price, category, quantity 
    FROM transactionitem
    INNER JOIN products
        ON products.id=transactionitem.product_id
    WHERE transaction_id='${transaction_id}'`
    const [rows, fields] = await mysql.query(query)
    res.status(200).json({rows})
}
// GET checkout receipt
const getCheckoutReceipt = (req, res) => {
    const name = req.params.receipt_name
    res.download(`./image/${name}`)
}


module.exports = { postCheckout, getTransaction, getProductTransaction, getCheckoutReceipt }