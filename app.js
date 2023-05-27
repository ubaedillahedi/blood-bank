const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.port || 5001;
const dbConfig = require("./config/dbConfig");
app.use(express.json());

const userRoute = require("./routes/userRoute");
const inventoryRoute = require("./routes/inventoryRoute");
const dashboardRoute = require("./routes/dashboardRoute");

app.use("/api/users", userRoute);
app.use("/api/inventory", inventoryRoute);
app.use("/api/dashboard", dashboardRoute);

app.listen(port, () => {
  console.log(`Node JS Server Started at ${port}`);
});
