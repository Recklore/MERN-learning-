const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: String,
    min: 14,
    max: 99,
  },
  emailId: {
    type: String,
  },
  pass: {
    type: String,
  },
  photo: {
    type: String,
  },
}, {timestamps:true});

// userSchema.methods.functionName = function{/*comething*/} //this is how we create schema methods

const User = mongoose.model("user", userSchema);

module.exports = User;
