const mongoose = require("mongoose")

const User = mongoose.model("User", {
  email: { type: String, required: true, minLenght: 5 },
  password: { type: String, required: true, minLenght: 5 },
  salt: { type: String, required: true },
})

module.exports = User
