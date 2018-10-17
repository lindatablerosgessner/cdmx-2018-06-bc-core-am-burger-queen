const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  shift:{
    type: Boolean,
    required: true
  },
  side:{
    type: [String]
  },
  extra:{
    type: [String]
  }
})

// Export it to make it global
module.exports = mongoose.model("Food", FoodSchema);