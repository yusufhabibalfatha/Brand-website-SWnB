// Package
const connectDB = require('../database/database')
// ==>
const postCustomer = async (customer) => {
    try{
        const mysql = await connectDB()
        const query = `INSERT INTO customer (name, email, phone_number, address) VALUES ('${customer.name}', '${customer.email}', '${customer.phone_number}', '${customer.address}')`
        const [rows, fields] = await mysql.execute(query)
        const id = rows.insertId
        return id
    }catch(err){
        console.log('ERRORR CUSTOMER ==>>>> ', err)
    }
}
const postTransaction = async (transaction) => {
    try{
        const mysql = await connectDB()
        const query = `INSERT INTO transaction (customer_id, message, amount, receipt) VALUES ('${transaction.customer_id}', '${transaction.message}', '${transaction.amount}', '${transaction.receipt}')`
        const [rows, fields] = await mysql.execute(query)
        const id = rows.insertId
        return id
    }catch(err){
        console.log('ERRORR TRANSACTION ==>>>> ', err)
    }
}
const postTransactionItems = async (transaction_id, transactionItems) => {
    try{
        const mysql = await connectDB()
        transactionItems.map(async (product, index) => {
            const query = `INSERT INTO transactionitem (transaction_id, product_id, quantity) VALUES ('${transaction_id}','${product.product_id}','${product.quantity}')`
            const [rows, fields] = await mysql.execute(query)
        })
    }catch(err){
        console.log('ERRORR TRANSACTION ITEMS ==>>>> ', err)
    }
}

module.exports = { postCustomer, postTransaction, postTransactionItems }


