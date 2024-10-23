const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const env = require("dotenv");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

env.config({ path: "./config/config.env" });

// import routes
const userRoute = require("./routes/userRoute");
const SellerRoute = require("./routes/SellerRoute");

app.use("/api/v1/", userRoute);
app.use("/api/v1/", SellerRoute);

// Simple route
app.get("/", (req, res) => {
  res.send("Backend is working fine");
});

module.exports = app;
