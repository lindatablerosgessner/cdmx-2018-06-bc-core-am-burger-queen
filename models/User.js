const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password:{
    type: String,
    required: true,
    trim: true
  },
})

// Export it to make it global
module.exports = mongoose.model("User", UserSchema);