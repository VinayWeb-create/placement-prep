const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  contestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contest",
    required: true,
  },

  title: { type: String, required: true },
  description: { type: String, required: true },

  functionName: { type: String, required: true },

  inputFormat: String,
  outputFormat: String,

  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    default: "easy",
  },

  sampleTests: [
    {
      input: String,
      output: String,
    },
  ],

  hiddenTests: [
    {
      input: String,
      output: String,
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Problem", problemSchema);
