const express = require("express");
const router = express.Router();
const ProductCtrls = require("../controllers/product.controllers");

router.post("/create-product", ProductCtrls.createProduct);

module.exports = router;