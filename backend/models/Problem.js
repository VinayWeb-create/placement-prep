const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  contestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contest",
    required: true,
  },
  title: String,
  description: String,
  functionName: String,
  testCases: [
    {
      input: mongoose.Schema.Types.Mixed,
      output: mongoose.Schema.Types.Mixed,
    },
  ],
  score: Number,
});

module.exports = mongoose.model("Problem", problemSchema);
