const mongoose = require("mongoose");
const Orders = mongoose.model("Order");

const getOrders = () => {
    return Orders.find().populate("productType");
};

const placeOrder = (orderDetails) => {
    return Orders.create(orderDetails);
}

module.exports = {
    getOrders,
    placeOrder
}