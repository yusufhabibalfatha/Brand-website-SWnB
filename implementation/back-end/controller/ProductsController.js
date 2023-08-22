// Module
const connectDB = require("../database/database");
// get all product
const getAllProducts = async (req, res) => {
  try {
    const mysql = await connectDB();
    const query = "SELECT * FROM products";
    const [rows, fields] = await mysql.query(query);
    res.status(200).json({ result: rows });
  } catch (err) {
    res.status(400).json({ error: "Cant get all products" });
  }
};

module.exports = { getAllProducts };
