require("dotenv").config();
const express = require("express");
const {connect} = require("./db/init");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false }));

app.use("/api/orders", require("./routes/order.routes"));
app.use("/api/products", require("./routes/product.routes"));

connect()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Server started!");
        });
    })
    .catch((error) => {
        process.exit(1);
    });

/*
    First Name
    Last Name
    Mobile No
    Address
    Pincode
    City
    State

    Type of Product -> SIM, JioFiber, AirFiber, JioPhone, JioFi, JioBook, JioBharat

    Preferred Date
    Preffered Time Slot

    Admin pannel with filters
*/