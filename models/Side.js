const mongoose = require("mongoose");

const SideSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

// Export it to make it global
module.exports = mongoose.model("Side", SideSchema);