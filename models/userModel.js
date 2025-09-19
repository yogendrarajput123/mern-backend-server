const mongoose = require("mongoose");

// Create Schema 🚀🚀---

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      unique: true, // email should not be repeat
      require: true,
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true }
);

// Now // Create Model 🚀🚀 ---

const users = mongoose.model("users", userSchema);

module.exports = users;

// import userModel in server.js
// All crud operation or any operation we do it with this userModel
