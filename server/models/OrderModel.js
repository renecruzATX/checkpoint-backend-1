const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderDate: {
        type: String,
        required: true
    },
    orderTime: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    }
});

const OrderModel = mongoose.model("Order", orderSchema);
module.exports = OrderModel;