const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.wb6yytr.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("db connected");
  } catch (error) {
    console.log(" Error while connecting the database ", error);
  }
};

module.exports = connection;
