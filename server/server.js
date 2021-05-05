//********************************** Using Packages *******************************************//
require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan("dev"));

app.use(cors());
//********************************** Constants *******************************************//
const PORT = process.env.PORT || 5000;

const connectionToDB = require("./config/db.js");
connectionToDB();
//********************************** Routers *******************************************//
const categoryRoute = require("./routers/categotyRouter.js");
const productRoute = require("./routers/productRouter.js")

app.use("/api/category", categoryRoute);
app.use("/api/product", productRoute)

//********************************** Error Handleling ***********************************//
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => {
  console.log("Server Is Connected!");
});
