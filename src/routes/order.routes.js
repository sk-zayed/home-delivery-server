const express = require("express");
const router = express.Router();
const OrderCtrls = require("../controllers/order.controllers");

router.get("/orders", OrderCtrls.getOrders);
router.post("/place-order", OrderCtrls.placeOrder);

module.exports = router;