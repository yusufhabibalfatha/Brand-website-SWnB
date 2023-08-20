// Module
const db = require('../database/database')
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
    // console.log('transaction id = ', transaction.id)
    // console.log('transaction items = ', transactionItems)
    await postTransactionItems(transaction.id, transactionItems)

}
// GET checkout
const getCheckout = (req, res) => {
    const order_id = req.params.order_id
    const query = `SELECT * FROM transaction INNER JOIN customer ON transaction.customer_id=customer.id INNER JOIN transactionItem ON transaction.id=transactionItem.transaction_id WHERE transaction.id = '${order_id}'`
    // console.log('query => ', query)
    db.query(query, (err, result, field) => {
            console.log('error => ', err)
            console.log('result => ', result)
            console.log('field => ', field)
    })
}

module.exports = { postCheckout, getCheckout }