const mongoose = require("mongoose");


const Bookschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);



const Bookdata = mongoose.model("Booklibary", Bookschema);

module.exports = Bookdata;