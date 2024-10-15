const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Brand = new Schema(
  {
    name: { type: String, required: true },
    origin: { type: String, required: true },
    description: {type: String, required:true},
    yearCreated: {type: Number, required: true},
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("brands", Brand);