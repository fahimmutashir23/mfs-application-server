const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());












app.get("/", (req, res) => {
    res.send("FCash is running");
  });
  
  app.listen(port, () => {
    console.log(`FCash is running on port ${port}`);
  });
