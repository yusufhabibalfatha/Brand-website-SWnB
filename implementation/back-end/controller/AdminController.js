// Package
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// Module
const connectDB = require("../database/database");
// Init
const createToken = (user_id) => {
  return jwt.sign({ user_id }, process.env.SECRET, { expiresIn: "3d" });
};
// Create admin account
const createAdmin = async (req, res) => {
  const email = process.env.EMAIL_ADMIN;
  const password = process.env.PASSWORD_ADMIN;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const mysql = await connectDB();
  const query = `INSERT INTO admin (email, password) VALUES ('${email}', '${hash}')`;
  const [rows, fields] = await mysql.execute(query);
  console.log("rows => ", rows);
  console.log("fields => ", fields);
  res.send({ msg: "create admin account done" });
};
// CHECK admin login
const loginAdmin = async (req, res) => {
  const mysql = await connectDB();
};

module.exports = { createAdmin, loginAdmin };
