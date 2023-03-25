const express = require("express");
const app = express();
var cors = require("cors");
require("dotenv").config({ path: "./config/.env" });
PORT = process.env.port || 6000;
const connectToDB = require("./config/DataBase");
app.use(cors());

app.use("/uploads", express.static(__dirname + "/uploads"));

app.use(express.json());
connectToDB();

app.use("/auth", require("./routes/authRoutes"));
app.use("/pet", require("./routes/petRoutes"));
app.use("/user", require("./routes/userRoutes"));
app.use("/offer", require("./routes/offerRoutes"));
app.use("/review", require("./routes/reviewRoutes"));

app.listen(PORT, (e) =>
  e ? console.log(e.message) : console.log(`Server is running on port ${PORT}`)
);
