const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5001;
const dbConfig = require("./config/dbConfig");

app.listen(port, () => {
  console.log(`Node JS Server Started at ${port}`);
});
