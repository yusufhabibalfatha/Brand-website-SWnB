// Package
const multer = require("multer");
// ==>
const fileStorageProducts = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "image/products");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});
const fileStorageReceipt = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "image/receipts");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let uploadProductImage = multer({
  storage: fileStorageProducts,
  fileFilter: fileFilter,
});
let uploadReceiptImage = multer({
  storage: fileStorageReceipt,
  fileFilter: fileFilter,
});

module.exports = { uploadProductImage, uploadReceiptImage };
