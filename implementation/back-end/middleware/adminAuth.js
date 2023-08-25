// Package
const jwt = require("jsonwebtoken");
// Module
const connectDB = require("../database/database");
// ==>
const adminAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const { user_id } = jwt.verify(token, process.env.SECRET);
    const mysql = await connectDB();
    const query = `SELECT * FROM admin WHERE id = '${user_id}'`;
    const [rows, fields] = await mysql.execute(query);
    const adminNotExist = rows.length < 1;
    if (adminNotExist) {
      console.log("admin not login");
      res.status(400).json({ msg: "Admin not exist!" });
    } else {
      console.log("admin login");
      next();
    }
  } catch (err) {
    console.log("error middleware auth admin => ", err);
    res.status(400).json({ msg: err });
  }
};

module.exports = adminAuth;
