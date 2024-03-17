const {Errors} = require("../constants");
const OrderServices = require("../services/order.services");

const getOrders = async (req, res, next) => {
    try {
        const orders = await OrderServices.getOrders();
        res.status(200).json({
            status: "success",
            data: orders,
        });
    } catch (error) {
        console.log("getOrders ctrls --> ", error);
        return next(error);
    }
};

const placeOrder = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        const error = new Error(
            "Request body is empty and need to have board details!"
        );
        error.name = Errors.BadRequest;
        return next(error);
    }

    try {
        const order = await OrderServices.placeOrder(req.body);

        res.status(201).json({
            status: "success",
            data: order,
        });
    } catch (error) {
        console.log("placeOrder ctrls --> ", error);
        return next(error);
    }
}

module.exports = {
    getOrders,
    placeOrder
}