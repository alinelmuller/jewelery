const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Jewelery = new Schema(
    {
        name: {type:String, required: true},
        price: {type:Number, required: true},
        material: {type:String, required: true},
        description:{type:String, required: true},
        stock: {type:Number, required: true},
        category: {type:String, required: true},
        image: {type:URL, required: true},
        brand: { type: Schema.Types.ObjectId, ref: 'Brand' },
      },
  { timestamps: true }
);

module.exports = mongoose.model("jeweleries", Jewelery);