// Module
const connectDB = require("../database/database");
const {
  addCustomer,
  addTransaction,
  addTransactionItems,
} = require("../model/TransactionModel");
// POST Transaction
const postTransaction = async (req, res) => {
  const customer = {
    name: req.body.name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    address: req.body.address,
  };
  // ----- CHECK VALIDATION ------
  customer.id = await addCustomer(customer);
  const transaction = {
    message: req.body.message,
    total_payment: req.body.total_payment,
    customer_id: customer.id,
    receipt: req.file.filename,
  };
  const transactionItems = JSON.parse(req.body.products);
  transaction.id = await addTransaction(transaction);
  await addTransactionItems(transaction.id, transactionItems);
  res.status(200).json({ msg: "done" });
};
// GET Transaction
const getTransaction = async (req, res) => {
  const mysql = await connectDB();
  const query = `
    SELECT transaction.id as ID, name, email, phone_number, address, message, amount, receipt FROM transaction 
    INNER JOIN customer 
        ON transaction.customer_id=customer.id`;
  const [rows, fields] = await mysql.query(query);
  res.status(200).json({ rows });
};
// GET product transaction
const getProductTransaction = async (req, res) => {
  const transaction_id = req.params.transaction_id;
  const mysql = await connectDB();
  const query = `
    SELECT name, price, category, quantity 
    FROM transactionitem
    INNER JOIN products
        ON products.id=transactionitem.product_id
    WHERE transaction_id='${transaction_id}'`;
  const [rows, fields] = await mysql.query(query);
  res.status(200).json({ rows });
};
// GET Transaction receipt
const getTransactionReceipt = (req, res) => {
  const name = req.params.receipt_name;
  res.download(`./image/receipts/${name}`);
};

module.exports = {
  postTransaction,
  getTransaction,
  getProductTransaction,
  getTransactionReceipt,
};
