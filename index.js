const express = require("express");
const app = express();
const connection=require("./src/config/dbconnection")
const bodyParser = require("body-parser");
const routes=require("./src/routes/routes")

const dotenv = require("dotenv");
dotenv.config()
let PORT = process.env.PORT;
let username = process.env.DB_USERNAME;
let password = process.env.DB_PASSWORD;
connection(username, password);


app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
  console.log("server is running", PORT);
});