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
  try {
    const mysql = await connectDB();
    const admin = {
      email: req.body.email,
      password: req.body.password,
    };
    const query = `SELECT id, email FROM admin WHERE email = '${admin.email}'`;
    const [rows, fields] = await mysql.execute(query);
    const notAdmin = rows.length < 1;
    if (notAdmin) {
      res.status(400).json({ msg: "you are not admin" });
    } else {
      const token = createToken(rows[0].id);
      res.status(200).json({ email: rows[0].email, token });
    }
  } catch (err) {
    console.log("error");
    console.log("==>", err);
  }
};

module.exports = { createAdmin, loginAdmin };
