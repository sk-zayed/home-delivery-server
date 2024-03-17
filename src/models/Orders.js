const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    productType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    prefferedDate: {
        type: Date,
        required: true
    },
    prefferedTime: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Delivered"],
        default: "Pending"
    }
});

mongoose.model("Order", orderSchema);