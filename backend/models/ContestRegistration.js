const mongoose = require("mongoose");

const contestRegistrationSchema = new mongoose.Schema({
  contestId: { type: mongoose.Schema.Types.ObjectId, ref: "Contest" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  name: String,
  email: String,
  college: String,
  year: String,

  registeredAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model(
  "ContestRegistration",
  contestRegistrationSchema
);
