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
// post product
const postProduct = async (req, res) => {
  const mysql = await connectDB();
  const product = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    src_image: req.file.filename,
  };
  const query = `INSERT INTO products (name, description, src_image, price, category) VALUES ('${product.name}', '${product.description}', '${product.src_image}', '${product.price}', '${product.category}')`;
  const [rows, fields] = await mysql.execute(query);
  res.status(200).json({ msg: "success" });
};

module.exports = { getAllProducts, postProduct };
