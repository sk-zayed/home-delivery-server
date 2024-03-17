const {Errors} = require("../constants");
const ProductServices = require("../services/product.services");

const createProduct = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        const error = new Error(
            "Request body is empty and need to have board details!"
        );
        error.name = Errors.BadRequest;
        return next(error);
    }

    try {
        const order = await ProductServices.createProduct(req.body);

        res.status(201).json({
            status: "success",
            data: order,
        });
    } catch (error) {
        console.log("createProduct ctrls --> ", error);
        return next(error);
    }
}

module.exports = {
    createProduct
}