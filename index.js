const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const uri = "mongodb://127.0.0.1:27017";
mongoose.connect(uri, { dbName: "db_biblioteca" });
requireDir("./models");
app.use("/api", require("./routes"));
app.listen(3000, () => {
    console.log("está sendo hospedado na porta 3000");
});

