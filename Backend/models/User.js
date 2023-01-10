const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  age: {
    type: String,
    default: "Unknown",
  },
  gender: {
    type: String,
    default: "Unknown",
  }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
