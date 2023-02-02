const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: 'user',
    enum: ["user", "admin"]
  },
});
UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});
const User = mongoose.model("User", UserSchema);

module.exports = User;
