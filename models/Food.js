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
  content:{
    type: [String],
    required: true
}
})

// Export it to make it global
module.exports = mongoose.model("Food", FoodSchema);