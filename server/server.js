const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/.env" });
PORT = process.env.port || 6000;
const connectToDB = require("./config/DataBase");
app.use(express.json())
connectToDB();


app.use("/auth", require("./routes/authRoutes"));


app.listen(PORT, (e) =>
  e ? console.log(e.message) : console.log(`Server is running on port ${PORT}`)
);
