const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  extra:{
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Extra"
  },
  side:{
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Side"
  },
  food:{
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Food"
  },
  drink:{
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Drink"
  },
  total:{
    type: Number,
    required: true
  },
  table:{
    type: Number
  },
  client:{
    type: String,
    required: true
  },
  employee:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  }
});

// Export it to make it global
module.exports = mongoose.model("Order", OrderSchema);