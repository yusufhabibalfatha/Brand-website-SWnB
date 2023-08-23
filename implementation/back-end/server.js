// Package
const express = require("express");
const cors = require("cors");
const path = require("path");
// Module
const ProductsRoutes = require("./routes/ProductsRoutes");
const TransactionRoutes = require("./routes/TransactionRoutes");
const AdminRoutes = require("./routes/AdminRoutes");
// Init
const app = express();
app.use(cors());
app.use(express.json());
// ==>
app.use("/products", ProductsRoutes);
app.use("/checkout", TransactionRoutes);
app.use("/admin", AdminRoutes);
app.use("/receipt", express.static(path.join(__dirname, "image/receipts")));
app.use("/image", express.static(path.join(__dirname, "image/products")));

app.listen(process.env.PORT_SERVER, async () => {
  console.log("Listen to the port...");
});
