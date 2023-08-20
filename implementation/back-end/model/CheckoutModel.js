// Package
const mysql = require('mysql2/promise')
// Module
const db = require('../database/database')
// ==>
const postCustomer = async (customer) => {
    try{
        const db = await mysql.createConnection({host:'localhost', user: 'root', database: 'mr_samuel'})
        const query = `INSERT INTO customer (name, email, phone_number, address) VALUES ('${customer.name}', '${customer.email}', '${customer.phone_number}', '${customer.address}')`
        const [rows, fields] = await db.execute(query)
        const id = rows.insertId
        return id
    }catch(err){
        console.log('ERRORR CUSTOMER ==>>>> ', err)
    }
}
const postTransaction = async (transaction) => {
    try{
        const db = await mysql.createConnection({host:'localhost', user: 'root', database: 'mr_samuel'})
        const query = `INSERT INTO transaction (customer_id, message) VALUES ('${transaction.customer_id}', '${transaction.message}')`
        const [rows, fields] = await db.execute(query)
        console.log('rows == ', rows)
        console.log('fields == ', fields)
        const id = rows.insertId
        return id
    }catch(err){
        console.log('ERRORR TRANSACTION ==>>>> ', err)
    }
}
const postTransactionItems = async (transaction_id, transactionItems) => {
    try{
        const db = await mysql.createConnection({host:'localhost', user: 'root', database: 'mr_samuel'})
        transactionItems.map(async (product, index) => {
            const query = `INSERT INTO transactionitem (transaction_id, product_id, quantity) VALUES ('${transaction_id}','${product.product_id}','${product.quantity}')`
            const [rows, fields] = await db.execute(query)
            console.log('rows == '+index+' ==> ', rows)
            console.log('fields == '+index+' ==> ', fields)
        })
    }catch(err){
        console.log('ERRORR TRANSACTION ITEMS ==>>>> ', err)
    }
}

module.exports = { postCustomer, postTransaction, postTransactionItems }


