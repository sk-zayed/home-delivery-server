const mongoose = require("mongoose");
const Products = mongoose.model("Product");

const createProduct = (productDetails) => {
    return Products.create(productDetails);
}

module.exports = {
    createProduct
}